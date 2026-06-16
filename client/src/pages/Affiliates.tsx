import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { affiliates } from "@/lib/site";
import { ArrowUpRight, Building2, ExternalLink, Globe2, Network, ShieldCheck } from "lucide-react";

const affiliate = affiliates[0];

export default function Affiliates() {
  return (
    <>
      <Seo
        title="계열사 | 오투HD 계열사 네트워크"
        description="오투HD의 계열사 오투프렌즈를 소개하고 공식 홈페이지로 연결합니다."
        canonicalPath="/affiliates"
      />

      <PageHero
        eyebrow="오투HD 계열사"
        title="오투HD의 성장 구조는 계열사 네트워크와 함께 확장됩니다."
        description="오투HD는 실행 인프라와 파트너십을 기반으로 계열사 브랜드를 연결하며, 각 브랜드가 가진 강점을 하나의 성장 생태계로 확장합니다."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={affiliate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_48px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-primary"
          >
            오투프렌즈 홈페이지 바로가기 <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#affiliate-preview"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-extrabold text-slate-700 transition hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
          >
            미리보기 확인 <Globe2 className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section className="overflow-hidden py-10 sm:py-16">
        <div className="container grid min-w-0 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch [&>*]:min-w-0">
          <article className="reveal-up min-w-0 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/68 p-7 shadow-sm backdrop-blur-xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-sky-50 text-primary">
                <Building2 className="h-8 w-8" />
              </div>
              <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-extrabold text-white">{affiliate.relation}</span>
            </div>
            <p className="mt-10 font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Affiliate Company</p>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.065em] text-slate-950 sm:text-5xl">
              {affiliate.name}
            </h2>
            <p className="mt-3 text-lg font-extrabold tracking-[-0.025em] text-primary">{affiliate.englishName}</p>
            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{affiliate.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {affiliate.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500">
                  {keyword}
                </span>
              ))}
            </div>
            <a
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-extrabold text-primary-foreground shadow-[0_16px_42px_rgba(0,119,255,0.22)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,119,255,0.3)]"
            >
              계열사 홈페이지 이동 <ExternalLink className="h-4 w-4" />
            </a>
          </article>

          <div className="reveal-up delay-200 grid gap-4">
            <div className="rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-[0_34px_100px_rgba(15,23,42,0.16)] sm:p-9">
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-sky-200">Otwo Network</p>
              <h3 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.055em] sm:text-4xl">계열사 연결은 단순 링크가 아니라 오투HD 그룹 확장의 접점입니다.</h3>
              <p className="mt-6 text-base leading-8 text-slate-300">계열사 페이지는 오투HD 방문자가 관련 브랜드를 한눈에 확인하고, 필요한 경우 공식 홈페이지로 바로 이동할 수 있도록 구성했습니다.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "공식 브랜드 연결", description: "오투프렌즈 공식 홈페이지를 오투HD 계열사 페이지에서 바로 확인하고 이동합니다.", icon: Globe2 },
                { title: "그룹 신뢰도 강화", description: "계열사 정보를 별도 페이지로 정리해 오투HD의 브랜드 네트워크를 명확하게 보여줍니다.", icon: ShieldCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="min-w-0 rounded-[1.7rem] border border-slate-200/80 bg-white/64 p-6 shadow-sm backdrop-blur-xl">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-5 font-display text-xl font-black tracking-[-0.04em] text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="affiliate-preview" className="overflow-hidden py-16 sm:py-24">
        <div className="container">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Website Preview</p>
              <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">
                오투프렌즈 홈페이지를 미리 확인한 뒤 이동할 수 있습니다.
              </h2>
            </div>
            <p className="text-lg leading-9 text-slate-600">
              아래 미리보기 영역은 계열사 홈페이지를 보여주는 카드형 프리뷰입니다. 화면 또는 버튼을 선택하면 새 창에서 오투프렌즈 홈페이지가 열립니다.
            </p>
          </div>

          <a
            href={affiliate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block min-w-0 overflow-hidden rounded-[3rem] border border-slate-200/80 bg-white/70 p-3 shadow-[0_30px_90px_rgba(15,56,99,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_36px_110px_rgba(15,56,99,0.16)] sm:p-5"
            aria-label="오투프렌즈 홈페이지 새 창으로 이동"
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 px-3 pb-3 sm:px-4 sm:pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="hidden min-w-0 flex-1 rounded-full bg-slate-100 px-4 py-2 text-center text-xs font-bold text-slate-500 sm:block">
                {affiliate.url}
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-extrabold text-white transition group-hover:bg-primary">
                새 창 이동 <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="relative mt-3 aspect-[16/10] min-h-[360px] overflow-hidden rounded-[2.2rem] bg-slate-100 sm:mt-5 lg:min-h-[520px]">
              <iframe
                src={affiliate.url}
                title="오투프렌즈 홈페이지 미리보기"
                className="h-full w-full border-0 bg-white"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-6 text-white opacity-100 transition sm:p-8">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold backdrop-blur-md">
                    <Network className="h-4 w-4" /> 오투HD 계열사
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.055em] sm:text-4xl">오투프렌즈</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-100 sm:text-base">미리보기를 확인하고 클릭하면 계열사 홈페이지로 이동합니다.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
