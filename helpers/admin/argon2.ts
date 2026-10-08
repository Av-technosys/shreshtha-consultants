import "server-only";

import * as crypto from "node:crypto";
import { promisify } from "node:util";

type Argon2Params = {
  message: Buffer;
  nonce: Buffer;
  parallelism: number;
  tagLength: number;
  memory: number;
  passes: number;
};

type Argon2Callback = (error: Error | null, result: Buffer) => void;
type Argon2Fn = (algorithm: "argon2id", params: Argon2Params, callback: Argon2Callback) => void;

const argon2 = promisify((crypto as typeof crypto & { argon2: Argon2Fn }).argon2);
const argonDefaults = {
  memory: 65536,
  passes: 3,
  parallelism: 1,
  tagLength: 32,
};

export async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16);
  const hash = await argon2("argon2id", {
    message: Buffer.from(password),
    nonce: salt,
    ...argonDefaults,
  });

  return [
    "$argon2id",
    "v=19",
    `m=${argonDefaults.memory},t=${argonDefaults.passes},p=${argonDefaults.parallelism}`,
    salt.toString("base64"),
    hash.toString("base64"),
  ].join("$");
}

export async function verifyPasswordHash(password: string, encodedHash: string) {
  const parsed = parseArgon2idHash(encodedHash);
  if (!parsed) return false;

  const hash = await argon2("argon2id", {
    message: Buffer.from(password),
    nonce: parsed.salt,
    memory: parsed.memory,
    passes: parsed.passes,
    parallelism: parsed.parallelism,
    tagLength: parsed.hash.length,
  });

  return hash.length === parsed.hash.length && crypto.timingSafeEqual(hash, parsed.hash);
}

export function isValidPasswordHash(encodedHash: string) {
  return parseArgon2idHash(encodedHash) !== null;
}

function parseArgon2idHash(encodedHash: string) {
  const [empty, algorithm, version, params, salt, hash] = encodedHash.split("$");
  if (empty !== "" || algorithm !== "argon2id" || version !== "v=19") return null;
  if (!params || !salt || !hash) return null;

  const parsedParams = Object.fromEntries(
    params.split(",").map((part) => {
      const [key, value] = part.split("=");
      return [key, Number(value)];
    })
  );

  if (!parsedParams.m || !parsedParams.t || !parsedParams.p) return null;

  return {
    memory: parsedParams.m,
    passes: parsedParams.t,
    parallelism: parsedParams.p,
    salt: Buffer.from(salt, "base64"),
    hash: Buffer.from(hash, "base64"),
  };
}
