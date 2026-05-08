// Style reminder: Soft Futurism Corporate Minimalism — asymmetric hero, rounded glass cards, oxygen-blue CTA, and high-key generated visuals.
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";
import { assetUrls, businessModels, pageCards, seoDefaults, stats, trustSignals } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Seo canonicalPath="/" />
      <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 lg:pb-28 lg:pt-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-sm">
              <Sparkles className="h-4 w-4" /> Future-oriented Sales Growth Partner
            </div>
            <h1 className="mt-8 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
              데이터와 영업 실행을 연결하는 종합영업대행사
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              오투HD(Otwo Holdings)는 <strong>자체DB추출</strong>, 전국 TM 센터, 광고 운영, 컨설팅을 하나의 성장 시스템으로 설계해 파트너사의 매출 전환을 돕습니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-[0_18px_45px_rgba(0,119,255,0.25)] transition hover:-translate-y-0.5">
                파트너십 의뢰하기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/business" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary">
                사업 모델 보기 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sky-100 via-white to-cyan-100 blur-2xl" />
            <img src={assetUrls.hero} alt="오투HD 자체DB추출과 TM 네트워크를 상징하는 미래형 데이터 인프라" className="relative w-full rounded-[2rem] border border-white/90 bg-white object-cover shadow-[0_35px_90px_rgba(15,56,99,0.14)]" />
            <div className="absolute bottom-6 left-6 hidden rounded-[1.4rem] border border-white/80 bg-white/82 p-4 shadow-xl backdrop-blur-xl sm:block">
              <p className="font-monoish text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Core Engine</p>
              <p className="mt-1 font-display text-xl font-black tracking-[-0.04em] text-slate-950">DB × TM × Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200/80 bg-white/78 p-6 shadow-sm backdrop-blur-xl">
              <p className="font-display text-4xl font-black tracking-[-0.06em] text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">Explore Otwo HD</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">필요한 정보를 독립 페이지에서 빠르게 확인하세요.</h2>
            </div>
            <p className="max-w-md text-pretty text-base leading-7 text-slate-600">스크롤 이동이 아닌 명확한 다중 페이지 구조로, 회사소개·사업영역·기술력·인사이트·문의 흐름을 분리했습니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pageCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href} className="group rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_rgba(15,56,99,0.12)]">
                  <div className="flex items-start justify-between gap-6">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-sky-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-8 font-monoish text-[11px] font-bold uppercase tracking-[0.24em] text-primary">{card.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">Business Model</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">컨설팅부터 공동투자까지 연결되는 실행 체계</h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">오투HD는 사업 모델을 분리된 서비스가 아니라 하나의 성장 파이프라인으로 설계합니다. 데이터 발굴, 광고 유입, TM 실행, 파트너십 구조가 이어질 때 위탁영업 컨설팅의 성과가 선명해집니다.</p>
            <div className="mt-8 grid gap-3">
              {businessModels.map((model) => (
                <div key={model.title} className="flex items-center gap-3 rounded-2xl bg-white/82 p-3 text-sm font-bold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {model.title} · {model.subtitle}
                </div>
              ))}
            </div>
          </div>
          <img src={assetUrls.business} alt="오투HD 4대 사업영역을 상징하는 라운드 카드형 비주얼" className="rounded-[2rem] border border-white bg-white shadow-[0_32px_80px_rgba(15,56,99,0.12)]" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container rounded-[2.5rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Trust Signals</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] sm:text-5xl">신뢰는 말보다 운영 구조에서 시작됩니다.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                    <Icon className="h-6 w-6 text-cyan-200" />
                    <h3 className="mt-4 font-display text-lg font-black tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
