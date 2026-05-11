// Homepage hub: brand mood first, then clear paths into business structure pages.
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";
import { businessModels, insights, operatingProcess, pageCards, stats, trustSignals } from "@/lib/site";

const heroPrinciples = ["전략 설계", "실행 운영", "데이터 기반"];

function GrowthStructureVisual() {
  return (
    <div className="hero-structure-stage hero-structure-stage--calm reveal-up delay-200" aria-label="운영 구조를 표현한 추상 브랜드 그래픽">
      <div className="structure-atmosphere atmosphere-a" />
      <div className="structure-atmosphere atmosphere-b" />
      <div className="structure-layer layer-a" />
      <div className="structure-layer layer-b" />
      <div className="structure-layer layer-c" />
      <div className="structure-thread thread-a" />
      <div className="structure-thread thread-b" />
      <div className="structure-thread thread-c" />
      <div className="structure-anchor">
        <span>OTWOHD</span>
      </div>
      <span className="quiet-node node-a" />
      <span className="quiet-node node-b" />
      <span className="quiet-node node-c" />
      <span className="quiet-node node-d" />
      <span className="quiet-node node-e" />
      <div className="structure-caption">
        <span>전략</span>
        <span>운영</span>
        <span>실행</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo canonicalPath="/" />
      <section className="hero-section relative isolate overflow-hidden pb-[4.5rem] pt-14 sm:pb-24 lg:min-h-[calc(100vh-5rem)] lg:pb-28 lg:pt-[5.5rem]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(37,99,235,0.08),transparent_28%),linear-gradient(180deg,rgba(248,250,252,0.34),rgba(255,255,255,0.92))]" />
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-slate-200/60 opacity-55" />
        <div className="container hero-main-grid relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] xl:grid-cols-[0.82fr_1.18fr]">
          <div className="hero-copy reveal-up max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/78 px-4 py-2 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" /> 실행 구조를 설계하는 비즈니스 그룹
            </div>
            <h1 className="hero-brand-title mt-9 text-balance font-display text-[clamp(2.35rem,4.15vw,4.3rem)] font-extrabold leading-[1.08] tracking-[-0.052em] text-slate-950">
              <span className="hero-title-line hero-title-line--top"><span>비즈니스는</span> <span>광고만으로</span></span>
              <span className="hero-title-line">성장하지 않습니다.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty font-display text-[clamp(1.28rem,1.82vw,1.78rem)] font-extrabold leading-[1.55] tracking-[-0.035em] text-slate-900">
              운영과 실행이 연결될 때,<br />성장은 구조가 됩니다.
            </p>
            <p className="hero-lead-copy mt-7 max-w-2xl text-base font-medium leading-8 tracking-[-0.015em] text-slate-600 sm:text-lg">
              <span className="block sm:inline">OTWOHD는 전략과 영업, 운영과 데이터를 </span>
              <span className="block sm:inline">하나의 실행 구조로 연결합니다. </span>
              <span className="block sm:inline">화면보다 현장을 먼저 보고, </span>
              <span className="block sm:inline">결과가 남는 방식을 설계합니다.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroPrinciples.map((item) => (
                <div key={item} className="hero-principle-chip hero-principle-chip--quiet">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="mt-11 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/business" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_20px_54px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary">
                사업 구조 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/process" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/78 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary">
                운영 구조 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <GrowthStructureVisual />
        </div>
      </section>

      <section className="overflow-hidden py-10">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-outline reveal-up rounded-[1.6rem] border border-slate-200/80 bg-white/45 p-6 shadow-sm backdrop-blur-xl" style={{ animationDelay: `${index * 80}ms` }}>
              <p className="font-monoish text-5xl font-bold tracking-[-0.08em] text-slate-950">{stat.value}</p>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden py-20 sm:py-28">
        <div className="container">
          <div className="reveal-up max-w-4xl">
            <p className="font-display text-sm font-extrabold tracking-[-0.01em] text-primary">사업분야</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-6xl">각 사업은 독립된 기능이 아니라 하나의 성장 구조로 연결됩니다.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 tracking-[-0.015em] text-slate-600">메인 페이지는 긴 설명을 쌓는 화면이 아니라, 필요한 카테고리로 바로 이동하는 브랜드 허브로 구성했습니다.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {businessModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <Link key={model.slug} href={`/business/${model.slug}`} className="group reveal-up motion-card rounded-[2rem] border border-slate-200/80 bg-white/65 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_26px_70px_rgba(15,56,99,0.1)]" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-9 font-monoish text-[11px] font-bold uppercase tracking-[0.24em] text-primary">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.045em] text-slate-950">{model.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{model.subtitle}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 transition group-hover:text-primary">상세 보기 <ArrowRight className="h-4 w-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 sm:py-28">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal-up lg:sticky lg:top-28">
            <p className="font-display text-sm font-extrabold tracking-[-0.01em] text-primary">오투HD가 다른 이유</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">우리는 오래된 영업 회사가 아니라 실행 구조를 설계하는 그룹입니다.</h2>
            <p className="mt-7 text-lg leading-9 tracking-[-0.015em] text-slate-600">신뢰는 화려한 표현보다 명확한 운영 기준에서 나옵니다. 오투HD는 전략과 실행이 분리되지 않는 구조로 파트너의 성장을 관리합니다.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="reveal-up rounded-[2rem] border border-slate-200/80 bg-white/58 p-6 shadow-sm backdrop-blur-xl" style={{ animationDelay: `${index * 110}ms` }}>
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-6 font-display text-xl font-black tracking-[-0.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 sm:py-28">
        <div className="container reveal-up rounded-[3rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_34px_100px_rgba(15,23,42,0.16)] sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-display text-sm font-extrabold text-sky-200">운영구조</p>
              <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] sm:text-5xl">분석에서 성장 관리까지, 실행을 기준으로 움직입니다.</h2>
            </div>
            <Link href="/process" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:text-primary">
              프로세스 상세 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {operatingProcess.map((step) => (
              <div key={step.step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="font-monoish text-2xl font-bold text-sky-200">{step.step}</p>
                <h3 className="mt-7 font-display text-lg font-black tracking-[-0.035em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 sm:py-28">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="reveal-up">
            <p className="font-display text-sm font-extrabold tracking-[-0.01em] text-primary">인사이트</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">성장 구조와 운영 관점을 다루는 브랜드 콘텐츠 허브</h2>
            <p className="mt-7 text-lg leading-9 tracking-[-0.015em] text-slate-600">공지사항이 아니라 비즈니스 인사이트 관점의 콘텐츠로 구성했습니다. 사용자는 읽기 중심으로 접근하고, 운영자는 카테고리와 태그 기반으로 확장할 수 있는 구조입니다.</p>
            <Link href="/insight" className="mt-9 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:text-primary">
              인사이트 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {insights.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/insight/${post.slug}`} className="group reveal-up rounded-[1.8rem] border border-slate-200/80 bg-white/65 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/25">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="rounded-full bg-sky-50 px-3 py-1.5 text-primary">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.045em] text-slate-950 group-hover:text-primary">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          {pageCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href} className="group rounded-[1.8rem] border border-slate-200/80 bg-white/55 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/25">
                <Icon className="h-6 w-6 text-primary" />
                <p className="mt-7 font-display text-sm font-extrabold tracking-[-0.01em] text-primary">{card.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl font-black tracking-[-0.04em] text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 group-hover:text-primary">이동하기 <ArrowRight className="h-4 w-4" /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
