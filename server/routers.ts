import { COOKIE_NAME } from "@shared/const";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { ENV } from "./_core/env";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import {
  createPost,
  createPopup,
  deletePost,
  deletePopup,
  getActivePopup,
  getAdminByUsername,
  getAllPopups,
  getAllPosts,
  getPostById,
  getPublishedPosts,
  updatePost,
  updatePopup,
} from "./db";

// ─── 관리자 JWT 헬퍼 ─────────────────────────────────────────────────────────
const ADMIN_COOKIE = "otwohd_admin_token";
const jwtSecret = new TextEncoder().encode(ENV.jwtSecret ?? "otwohd-admin-secret-key-2026");

async function signAdminToken(username: string) {
  return new SignJWT({ username, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(jwtSecret);
}

async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, jwtSecret);
    return payload as { username: string; role: string };
  } catch {
    return null;
  }
}

// ─── 관리자 인증 미들웨어 ─────────────────────────────────────────────────────
const adminProcedure = publicProcedure.use(async ({ ctx, next }) => {
  const token = ctx.req.cookies?.[ADMIN_COOKIE];
  if (!token) throw new Error("관리자 인증이 필요합니다.");
  const payload = await verifyAdminToken(token);
  if (!payload) throw new Error("유효하지 않은 토큰입니다.");
  return next({ ctx: { ...ctx, adminUser: payload } });
});

// ─── Slug 생성 헬퍼 ──────────────────────────────────────────────────────────
function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);
  return `${base}-${Date.now()}`;
}

export const appRouter = router({
  system: systemRouter,

  // ─── Manus OAuth 인증 ───────────────────────────────────────────────────
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── 관리자 로컬 인증 ────────────────────────────────────────────────────
  admin: router({
    login: publicProcedure
      .input(z.object({ username: z.string(), password: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const account = await getAdminByUsername(input.username);
        if (!account) throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
        const valid = await bcrypt.compare(input.password, account.passwordHash);
        if (!valid) throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
        const token = await signAdminToken(account.username);
        ctx.res.cookie(ADMIN_COOKIE, token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 7 * 24 * 60 * 60 * 1000,
          path: "/",
        });
        return { success: true, username: account.username };
      }),

    logout: publicProcedure.mutation(({ ctx }) => {
      ctx.res.clearCookie(ADMIN_COOKIE, { path: "/" });
      return { success: true };
    }),

    me: publicProcedure.query(async ({ ctx }) => {
      const token = ctx.req.cookies?.[ADMIN_COOKIE];
      if (!token) return null;
      return await verifyAdminToken(token);
    }),
  }),

  // ─── 인사이트 (공개) ─────────────────────────────────────────────────────
  insight: router({
    list: publicProcedure.query(async () => {
      return getPublishedPosts();
    }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const { getPostBySlug } = await import("./db");
        return getPostBySlug(input.slug);
      }),
  }),

  // ─── 인사이트 관리 (관리자 전용) ─────────────────────────────────────────
  insightAdmin: router({
    list: adminProcedure.query(async () => getAllPosts()),

    get: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => getPostById(input.id)),

    create: adminProcedure
      .input(
        z.object({
          title: z.string().min(1),
          category: z.string().default("일반"),
          summary: z.string().optional(),
          content: z.string().min(1),
          coverImageUrl: z.string().optional(),
          published: z.boolean().default(false),
          readingTime: z.string().default("5분"),
        })
      )
      .mutation(async ({ input }) => {
        const slug = generateSlug(input.title);
        await createPost({ ...input, slug });
        return { success: true };
      }),

    update: adminProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().min(1).optional(),
          category: z.string().optional(),
          summary: z.string().optional(),
          content: z.string().optional(),
          coverImageUrl: z.string().optional(),
          published: z.boolean().optional(),
          readingTime: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await updatePost(id, data);
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deletePost(input.id);
        return { success: true };
      }),
  }),

  // ─── 팝업 (공개) ─────────────────────────────────────────────────────────
  popup: router({
    active: publicProcedure.query(async () => {
      const popup = await getActivePopup();
      return popup ?? null;
    }),
  }),

  // ─── 팝업 관리 (관리자 전용) ─────────────────────────────────────────────
  popupAdmin: router({
    list: adminProcedure.query(async () => getAllPopups()),

    create: adminProcedure
      .input(
        z.object({
          title: z.string().min(1),
          imageUrl: z.string().optional(),
          linkUrl: z.string().optional(),
          active: z.boolean().default(false),
          startAt: z.date().optional(),
          endAt: z.date().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createPopup(input);
        return { success: true };
      }),

    update: adminProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().optional(),
          imageUrl: z.string().optional(),
          linkUrl: z.string().optional(),
          active: z.boolean().optional(),
          startAt: z.date().optional().nullable(),
          endAt: z.date().optional().nullable(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await updatePopup(id, data as Parameters<typeof updatePopup>[1]);
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deletePopup(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
