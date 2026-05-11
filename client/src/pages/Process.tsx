import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { operatingProcess, techPillars } from "@/lib/site";

export default function Process() {
  return (
    <>
      <Seo
        title="운영구조 | 오투HD 운영 프로세스"
        description="오투HD의 분석, 전략 설계, 운영 구축, 실행, 성장 관리 프로세스를 소개합니다."
        canonicalPath="/process"
      />
      <PageHero
        eyebrow="운영구조"
        title={
          <>
            <span className="block sm:inline">오투HD는</span>{" "}
            <span className="block sm:inline">대행이 아니라</span>{" "}
            <span className="block sm:inline">성장 운영 구조를</span>{" "}
            <span className="block sm:inline">설계합니다.</span>
          </>
        }
        description="프로젝트는 분석에서 시작해 전략 설계, 운영 구축, 실행, 성장 관리로 이어집니다. 각 단계는 데이터와 현장 실행을 함께 검토하도록 설계되어 있습니다."
      />

      <section className="overflow-hidden py-10 sm:py-16">
        <div className="container">
          <div className="grid min-w-0 gap-5 lg:grid-cols-5 [&>*]:min-w-0">
            {operatingProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.step} className="reveal-up min-w-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/64 p-6 shadow-sm backdrop-blur-xl" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-monoish text-3xl font-bold tracking-[-0.07em] text-primary">{step.step}</span>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 className="mt-10 font-display text-2xl font-black tracking-[-0.045em] text-slate-950">{step.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start [&>*]:min-w-0">
          <div className="reveal-up lg:sticky lg:top-28">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Operating Infrastructure</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">프로세스를 움직이게 하는 내부 운영 인프라</h2>
            <p className="mt-7 text-lg leading-9 tracking-[-0.015em] text-slate-600">오투HD의 프로세스는 문서로 끝나는 전략이 아니라 데이터, 운영 거점, 리포팅 체계가 실제 실행으로 연결되는 구조입니다.</p>
          </div>
          <div className="grid gap-4">
            {techPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="reveal-up min-w-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/64 p-7 shadow-sm backdrop-blur-xl" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky-50 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-black tracking-[-0.045em] text-slate-950">{pillar.title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container min-w-0 overflow-hidden rounded-[3rem] bg-slate-950 p-7 text-white shadow-[0_34px_100px_rgba(15,23,42,0.16)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-sky-200">Execution Standard</p>
              <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] sm:text-5xl">실행 전 반드시 정리하는 기준</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["누구에게 접근할 것인가", "어떤 메시지로 설득할 것인가", "어떤 지표로 개선할 것인가", "어떤 후속 액션이 필요한가"].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                  <CheckCircle2 className="h-5 w-5 text-sky-200" />
                  <p className="mt-4 text-sm font-extrabold leading-6 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:text-primary">
            프로세스 상담하기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
