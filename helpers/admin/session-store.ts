import "server-only";

import { mkdir, open, readFile, rename, rm, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

type StoredSession = {
  tokenHash: string;
  adminEmail: string;
  expiresAt: string;
  createdAt: string;
};

type LoginAttempt = {
  identifier: string;
  ipAddress: string;
  success: boolean;
  createdAt: string;
};

type StoreData = {
  sessions: StoredSession[];
  attempts: LoginAttempt[];
};

const defaultStorePath = path.join(process.cwd(), ".admin-auth", "store.json");
const storePath = process.env.ADMIN_SESSION_STORE_PATH || defaultStorePath;
const lockPath = `${storePath}.lock`;
const lockRetryMs = 25;
const lockTimeoutMs = 3000;

export async function findSession(tokenHash: string) {
  return withStore(async (data) => data.sessions.find((session) => session.tokenHash === tokenHash) ?? null);
}

export async function saveSession(session: StoredSession) {
  await withStore(async (data) => {
    data.sessions = data.sessions.filter((item) => item.tokenHash !== session.tokenHash);
    data.sessions.push(session);
  });
}

export async function deleteSession(tokenHash: string) {
  await withStore(async (data) => {
    data.sessions = data.sessions.filter((session) => session.tokenHash !== tokenHash);
  });
}

export async function deleteAllSessions() {
  await withStore(async (data) => {
    data.sessions = [];
  });
}

export async function pruneExpiredSessions(now = new Date()) {
  await withStore(async (data) => {
    data.sessions = data.sessions.filter((session) => new Date(session.expiresAt) > now);
  });
}

export async function countRecentFailedAttempts(identifier: string, ipAddress: string, since: Date) {
  return withStore(async (data) => {
    return data.attempts.filter((attempt) => {
      return (
        !attempt.success &&
        new Date(attempt.createdAt) > since &&
        (attempt.identifier === identifier || attempt.ipAddress === ipAddress)
      );
    }).length;
  });
}

export async function saveLoginAttempt(attempt: LoginAttempt) {
  await withStore(async (data) => {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
    data.attempts = data.attempts.filter((item) => new Date(item.createdAt) > cutoff);
    data.attempts.push(attempt);
  });
}

async function withStore<T>(callback: (data: StoreData) => T | Promise<T>) {
  await ensureStoreDirectory();
  const lockHandle = await acquireLock();

  try {
    const data = await readStore();
    const result = await callback(data);
    await writeStore(data);
    return result;
  } finally {
    await lockHandle.close();
    await unlink(lockPath).catch(() => undefined);
  }
}

async function ensureStoreDirectory() {
  assertPrivateStorePath();
  const directory = path.dirname(storePath);
  await mkdir(directory, { recursive: true, mode: 0o700 });
}

async function acquireLock() {
  const startedAt = Date.now();

  while (Date.now() - startedAt < lockTimeoutMs) {
    try {
      return await open(lockPath, "wx", 0o600);
    } catch (error) {
      if (!isCode(error, "EEXIST")) throw error;
      await sleep(lockRetryMs);
    }
  }

  await rm(lockPath, { force: true });
  return open(lockPath, "wx", 0o600);
}

async function readStore(): Promise<StoreData> {
  try {
    const raw = await readFile(/* turbopackIgnore: true */ storePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<StoreData>;
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
    };
  } catch (error) {
    if (isCode(error, "ENOENT")) return { sessions: [], attempts: [] };
    throw error;
  }
}

async function writeStore(data: StoreData) {
  const tempPath = `${storePath}.${process.pid}.tmp`;
  await writeFile(/* turbopackIgnore: true */ tempPath, JSON.stringify(data), { mode: 0o600 });
  await rename(/* turbopackIgnore: true */ tempPath, storePath);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isCode(error: unknown, code: string) {
  return typeof error === "object" && error !== null && "code" in error && error.code === code;
}

function assertPrivateStorePath() {
  const resolvedStorePath = path.resolve(/* turbopackIgnore: true */ storePath);
  const publicPath = path.resolve(process.cwd(), "public");

  if (resolvedStorePath === publicPath || resolvedStorePath.startsWith(`${publicPath}${path.sep}`)) {
    throw new Error("Admin session store cannot be inside the public directory.");
  }
}
