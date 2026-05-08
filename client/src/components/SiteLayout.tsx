// Style reminder: Soft Futurism Corporate Minimalism — navigation uses generous spacing, rounded glass surfaces, and quiet blue focus states.
import { PropsWithChildren, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, navItems } from "@/lib/site";

function LogoMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="오투HD 메인으로 이동">
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_18px_60px_rgba(0,119,255,0.22)]">
        <span className="font-display text-[15px] font-black tracking-[-0.08em]">O₂</span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-cyan-300" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-extrabold tracking-[-0.04em] text-slate-950">오투HD</span>
        <span className="block font-monoish text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Otwo Holdings</span>
      </span>
    </Link>
  );
}

export default function SiteLayout({ children }: PropsWithChildren) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/15 selection:text-primary">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-18rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,98,204,0.08)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between gap-6">
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
            파트너십 문의 <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="모바일 메뉴 열기"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="container pb-5 lg:hidden">
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

      <main>{children}</main>

      <footer className="mt-20 border-t border-slate-200/80 bg-white/70">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-slate-600">{brand.description}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold text-slate-950">Company</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">대표이사 {brand.ceo}<br />{brand.address}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold text-slate-950">SEO Focus</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">종합영업대행사 · 자체DB추출 · 위탁영업 컨설팅 · 광고대행 · 공동투자</p>
          </div>
        </div>
        <div className="border-t border-slate-200/80 py-5">
          <div className="container flex flex-col justify-between gap-2 text-xs text-slate-500 md:flex-row">
            <span>© 2026 Otwo Holdings. All rights reserved.</span>
            <span>Designed as a future-oriented B2B homepage draft.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
