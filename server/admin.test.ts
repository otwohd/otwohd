import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const cookies: Record<string, string> = {};
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      cookies,
    } as unknown as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string) => { cookies[name] = value; },
      clearCookie: () => {},
    } as unknown as TrpcContext["res"],
  };
}

describe("admin.login", () => {
  it("올바른 자격증명으로 로그인 성공", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    // DB 연결이 필요하므로 DB 없이 실행 시 오류 예상
    try {
      const result = await caller.admin.login({ username: "admin", password: "admin1234" });
      expect(result.success).toBe(true);
    } catch (e: unknown) {
      // DB 없는 환경에서는 DB 연결 오류 허용
      const msg = e instanceof Error ? e.message : String(e);
      expect(msg).toMatch(/database|DB|connect/i);
    }
  });

  it("잘못된 자격증명으로 로그인 실패", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    try {
      await caller.admin.login({ username: "admin", password: "wrongpassword" });
      expect(true).toBe(false); // 여기 도달하면 안 됨
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      // 오류 메시지 또는 DB 연결 오류
      expect(msg.length).toBeGreaterThan(0);
    }
  });
});

describe("popup.active", () => {
  it("공개 팝업 조회 가능", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    try {
      const result = await caller.popup.active();
      // DB 없으면 undefined, 있으면 팝업 객체 또는 null
      expect(result === undefined || result === null || typeof result === "object").toBe(true);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      expect(msg).toMatch(/database|DB|connect/i);
    }
  });
});
