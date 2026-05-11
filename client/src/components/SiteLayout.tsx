// Brand layout: calm premium B2B navigation with OTWOHD as a business growth and sales infrastructure group.
import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, navItems } from "@/lib/site";

function LogoMark() {
  const logoSrc = `${import.meta.env.BASE_URL}assets/otwo-logo-black-transparent.svg`;

  return (
    <Link href="/" className="group inline-flex items-center" aria-label="오투HD 메인으로 이동">
      <span className="rounded-[1.35rem] bg-white/35 px-1 py-1 transition duration-300 group-hover:bg-white/60 group-hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <img
          src={logoSrc}
          alt="오투에이치디 로고"
          className="h-9 w-auto max-w-[190px] object-contain sm:h-10 sm:max-w-[220px]"
          width="220"
          height="50"
        />
      </span>
    </Link>
  );
}

export default function SiteLayout({ children }: PropsWithChildren) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/15 selection:text-primary">
      <div className="site-background-field pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="site-background-orb absolute left-[-18rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="site-background-orb absolute right-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,98,204,0.08)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <header className="site-header sticky top-0 z-50 border-b border-white/70 bg-white/78 backdrop-blur-2xl">
        <div className="site-header-inner container flex h-16 items-center justify-between gap-4 lg:h-20 lg:gap-6">
          <LogoMark />
          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/72 p-1 shadow-sm lg:flex" aria-label="주요 메뉴">
            {navItems.map((item) => {
              const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_14px_38px_rgba(0,119,255,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(0,119,255,0.3)] lg:inline-flex"
          >
            성장 구조 상담 <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            className="mobile-menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu-panel container pb-5 lg:hidden">
            <nav className="grid gap-2 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-xl" aria-label="모바일 메뉴">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="mobile-header-spacer lg:hidden" aria-hidden="true" />

      <main key={location} className="page-route-shell">{children}</main>

      <footer className="mt-20 border-t border-slate-200/80 bg-white/70">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-slate-600">{brand.description}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold text-slate-950">회사 정보</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">대표이사 {brand.ceo}<br />{brand.address}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold text-slate-950">브랜드 방향</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">성장 구조 설계 · 실행 인프라 구축 · 데이터 기반 운영</p>
          </div>
        </div>
        <div className="border-t border-slate-200/80 py-5">
          <div className="container flex flex-col justify-between gap-2 text-xs text-slate-500 md:flex-row">
            <span>© 2026 Otwo Holdings. All rights reserved.</span>
            <span>성장 구조와 실행 인프라를 설계하는 비즈니스 그룹</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
