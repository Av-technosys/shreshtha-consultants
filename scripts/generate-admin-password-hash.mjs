import { argon2, randomBytes } from "node:crypto";
import { promisify } from "node:util";
import { stdin, stdout, stderr, exit } from "node:process";
import { createInterface } from "node:readline/promises";

const argon2Async = promisify(argon2);
const params = {
  memory: 65536,
  passes: 3,
  parallelism: 1,
  tagLength: 32,
};

const password = await readPassword();

if (password.length < 12) {
  stderr.write("Use at least 12 characters for the admin password.\n");
  exit(1);
}

const salt = randomBytes(16);
const hash = await argon2Async("argon2id", {
  message: Buffer.from(password),
  nonce: salt,
  ...params,
});

stdout.write(
  [
    "$argon2id",
    "v=19",
    `m=${params.memory},t=${params.passes},p=${params.parallelism}`,
    salt.toString("base64"),
    hash.toString("base64"),
  ].join("$")
);
stdout.write("\n");

async function readPassword() {
  const argPassword = process.argv[2];
  if (argPassword) return argPassword;

  const rl = createInterface({ input: stdin, output: stdout });
  const value = await rl.question("Admin password: ");
  rl.close();
  return value;
}
