// Style reminder: Soft Futurism Corporate Minimalism — service cards should read as connected modules in one calm growth system.
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { assetUrls, businessModels } from "@/lib/site";

export default function Business() {
  return (
    <>
      <Seo
        title="사업영역 | 오투HD 종합영업대행사"
        description="오투HD의 핵심 사업영역인 컨설팅, 위탁영업, 광고대행, 공동투자 모델을 소개합니다. 위탁영업 컨설팅과 성과형 영업 실행을 통합합니다."
        keywords="종합영업대행사, 위탁영업 컨설팅, 광고대행, 컨설팅, 공동투자, 영업대행"
        canonicalPath="/business"
      />
      <PageHero eyebrow="Business Models" title="컨설팅, 위탁영업, 광고대행, 공동투자를 하나의 성장 구조로 연결합니다." description="오투HD는 각 서비스를 독립적으로 제공하는 데서 멈추지 않고, 데이터 발굴부터 상담 전환과 파트너십 설계까지 이어지는 실행 체계를 만듭니다." />

      <section className="pb-12 sm:pb-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-5 md:grid-cols-2">
            {businessModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <article key={model.title} className="group rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,56,99,0.12)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-monoish text-xs font-black tracking-[0.18em] text-slate-300">0{index + 1}</span>
                  </div>
                  <h2 className="mt-7 font-display text-2xl font-black tracking-[-0.05em] text-slate-950">{model.title}</h2>
                  <p className="mt-2 text-sm font-bold text-primary">{model.subtitle}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{model.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {model.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{keyword}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          <div>
            <img src={assetUrls.business} alt="오투HD 사업영역 연결 구조" className="rounded-[2rem] border border-white bg-white shadow-[0_32px_80px_rgba(15,56,99,0.12)]" />
            <div className="mt-5 rounded-[1.7rem] border border-slate-200/80 bg-white/82 p-6 shadow-sm">
              <h3 className="font-display text-xl font-black tracking-[-0.04em] text-slate-950">운영 관점의 차별점</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">광고로 유입된 관심 고객, 자체DB추출 기반 잠재 고객, TM 상담 결과, 후속 제안의 품질을 하나의 흐름으로 관리합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container rounded-[2.5rem] bg-slate-950 p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Partnership Request</p>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-black tracking-[-0.06em]">우리 회사에 맞는 위탁영업 구조가 궁금하다면 상담을 요청하세요.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">
              문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
