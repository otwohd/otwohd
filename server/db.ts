import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  adminAccounts,
  InsertInsightPost,
  InsertPopup,
  InsertUser,
  insightPosts,
  popups,
  users,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── Users ───────────────────────────────────────────────────────────────────

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) return;

  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};
  const textFields = ["name", "email", "loginMethod"] as const;
  type TextField = (typeof textFields)[number];
  const assignNullable = (field: TextField) => {
    const value = user[field];
    if (value === undefined) return;
    const normalized = value ?? null;
    values[field] = normalized;
    updateSet[field] = normalized;
  };
  textFields.forEach(assignNullable);
  if (user.lastSignedIn !== undefined) {
    values.lastSignedIn = user.lastSignedIn;
    updateSet.lastSignedIn = user.lastSignedIn;
  }
  if (user.role !== undefined) {
    values.role = user.role;
    updateSet.role = user.role;
  } else if (user.openId === ENV.ownerOpenId) {
    values.role = "admin";
    updateSet.role = "admin";
  }
  if (!values.lastSignedIn) values.lastSignedIn = new Date();
  if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─── Admin Accounts ──────────────────────────────────────────────────────────

export async function getAdminByUsername(username: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(adminAccounts)
    .where(eq(adminAccounts.username, username))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─── Insight Posts ────────────────────────────────────────────────────────────

export async function getPublishedPosts() {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(insightPosts)
    .where(eq(insightPosts.published, true))
    .orderBy(desc(insightPosts.createdAt));
}

export async function getAllPosts() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(insightPosts).orderBy(desc(insightPosts.createdAt));
}

export async function getPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(insightPosts)
    .where(and(eq(insightPosts.slug, slug), eq(insightPosts.published, true)))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(insightPosts).where(eq(insightPosts.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createPost(data: InsertInsightPost) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.insert(insightPosts).values(data);
}

export async function updatePost(id: number, data: Partial<InsertInsightPost>) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.update(insightPosts).set(data).where(eq(insightPosts.id, id));
}

export async function deletePost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.delete(insightPosts).where(eq(insightPosts.id, id));
}

// ─── Popups ───────────────────────────────────────────────────────────────────

export async function getActivePopup() {
  const db = await getDb();
  if (!db) return undefined;
  const now = new Date();
  const result = await db
    .select()
    .from(popups)
    .where(eq(popups.active, true))
    .orderBy(desc(popups.updatedAt))
    .limit(1);
  if (!result.length) return undefined;
  const popup = result[0];
  // 기간 체크
  if (popup.startAt && popup.startAt > now) return undefined;
  if (popup.endAt && popup.endAt < now) return undefined;
  return popup;
}

export async function getAllPopups() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(popups).orderBy(desc(popups.createdAt));
}

export async function createPopup(data: InsertPopup) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.insert(popups).values(data);
}

export async function updatePopup(id: number, data: Partial<InsertPopup>) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.update(popups).set(data).where(eq(popups.id, id));
}

export async function deletePopup(id: number) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  await db.delete(popups).where(eq(popups.id, id));
}
