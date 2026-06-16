import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { businessModels, operatingProcess } from "@/lib/site";

export function BusinessDetail({ slug }: { slug: string }) {
  const model = businessModels.find((item) => item.slug === slug) ?? businessModels[0];
  const Icon = model.icon;

  return (
    <>
      <Seo
        title={`${model.title} | 오투HD 사업분야`}
        description={`${model.title} 상세 페이지. ${model.description}`}
        canonicalPath={`/business/${model.slug}`}
      />
      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container">
          <Link href="/business" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-700 transition hover:-translate-y-1 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> 사업영역으로 돌아가기
          </Link>
          <div className="mt-10 grid min-w-0 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start [&>*]:min-w-0">
            <div className="reveal-up">
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-sky-50 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <p className="mt-9 font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">사업 상세</p>
              <h1 className="mt-5 text-balance font-display text-5xl font-black leading-[1.04] tracking-[-0.075em] text-slate-950 sm:text-7xl">{model.title}</h1>
              <p className="mt-7 max-w-2xl text-2xl font-semibold leading-[1.65] tracking-[-0.035em] text-slate-700">{model.subtitle}</p>
            </div>
            <div className="reveal-up delay-200 min-w-0 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/68 p-5 shadow-sm backdrop-blur-xl sm:p-9">
              <p className="text-lg leading-9 tracking-[-0.015em] text-slate-600">{model.detail}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {model.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-primary">{keyword}</span>
                ))}
              </div>
              <div className="mt-10 min-w-0 overflow-hidden rounded-[1.7rem] bg-slate-950 p-4 text-white sm:p-6">
                <p className="font-monoish text-[11px] font-bold uppercase tracking-[0.28em] text-sky-200">연결 운영 구조</p>
                <div className="mt-5 grid gap-3">
                  {operatingProcess.slice(0, 3).map((step) => (
                    <div key={step.step} className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <span className="font-monoish text-sm font-bold text-sky-200">{step.step}</span>
                      <div className="min-w-0">
                        <h2 className="text-sm font-extrabold text-white">{step.title}</h2>
                        <p className="mt-1 break-keep text-xs leading-5 text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container min-w-0 overflow-hidden rounded-[3rem] border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Next Action</p>
              <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.06em] text-slate-950">상담은 서비스 선택보다 구조 진단에서 시작합니다.</h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-slate-600">현재 사업의 병목이 데이터, 광고, 상담, 제안 중 어디에 있는지 먼저 확인한 뒤 가장 적합한 실행 구조를 제안합니다.</p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-primary">
                파트너십 문의하기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Business() {
  return (
    <>
      <Seo
        title="사업분야 | 오투HD 사업영역"
        description="오투HD의 컨설팅, 위탁영업, 광고대행, 공동투자, 데이터 운영 구조를 소개합니다."
        canonicalPath="/business"
      />
      <PageHero
        eyebrow="사업분야"
        title={<>성장은 서비스 목록이 아니라 연결된<br />구조에서 만들어집니다.</>}
        description="오투HD는 다섯 가지 사업을 각각 독립적으로 운영하면서도, 실제 프로젝트에서는 하나의 성장 시스템으로 연결합니다."
        contentClassName="lg:max-w-6xl"
        descriptionClassName="lg:max-w-6xl lg:[text-wrap:wrap]"
      />
      <section className="overflow-hidden py-10 sm:py-16">
        <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {businessModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <Link key={model.slug} href={`/business/${model.slug}`} className="group reveal-up rounded-[2rem] border border-slate-200/80 bg-white/64 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_26px_70px_rgba(15,56,99,0.1)]" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-monoish text-sm font-bold text-slate-300">0{index + 1}</span>
                </div>
                <h2 className="mt-10 font-display text-2xl font-black tracking-[-0.045em] text-slate-950">{model.title}</h2>
                <p className="mt-3 text-sm font-bold text-primary">{model.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{model.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {model.keywords.slice(0, 2).map((keyword) => (
                    <span key={keyword} className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-500">{keyword}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal-up">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Integrated Operation</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">각 사업은 분리되어 보이지만 실행 단계에서는 하나의 흐름으로 연결됩니다.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["타깃 데이터 정의", "광고·콘텐츠 유입", "상담·제안 실행", "성과 리포팅 개선"].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-xl">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-5 font-display text-lg font-black tracking-[-0.035em] text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
