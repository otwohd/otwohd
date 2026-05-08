// Style reminder: Soft Futurism Corporate Minimalism — timeline content should feel transparent, credible, and quietly progressive.
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { assetUrls, brand, milestones, trustSignals } from "@/lib/site";

export default function About() {
  return (
    <>
      <Seo
        title="회사소개 | 오투HD(Otwo Holdings)"
        description="2018년 오투스퀘어로 시작해 2025년 오투HD로 도약한 종합영업대행사 오투HD의 연혁, 기업문화, 신뢰 가치를 소개합니다."
        canonicalPath="/about"
      />
      <PageHero eyebrow="About Otwo HD" title="오투스퀘어에서 오투HD로, 신뢰 기반 영업 인프라의 확장" description={brand.foundedStory}>
        <img src={assetUrls.timeline} alt="오투HD 성장 타임라인 추상 비주얼" className="w-full rounded-[2rem] border border-white bg-white shadow-[0_32px_80px_rgba(15,56,99,0.12)]" />
      </PageHero>

      <section className="py-12 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">Timeline</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] text-slate-950">연혁은 방향성을 보여주는 가장 분명한 증거입니다.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-slate-600">오투HD는 현장 영업 경험에서 출발해 컨설팅, 광고, 데이터, TM 인프라를 통합하는 조직으로 성장했습니다.</p>
          </div>
          <div className="relative grid gap-5">
            <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary via-sky-200 to-transparent sm:block" />
            {milestones.map((item) => (
              <article key={item.year} className="relative rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm backdrop-blur-xl sm:ml-12">
                <div className="absolute -left-[3.45rem] top-8 hidden h-6 w-6 rounded-full border-4 border-white bg-primary shadow-lg sm:block" />
                <p className="font-monoish text-sm font-black tracking-[0.18em] text-primary">{item.year}</p>
                <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container">
          <div className="rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl sm:p-10">
            <div className="max-w-3xl">
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">Culture</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] text-slate-950">건강한 기업문화와 장기적 신뢰를 우선합니다.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">영업은 단기 성과만으로 지속될 수 없습니다. 오투HD는 파트너와 내부 구성원 모두에게 투명한 기준, 실행 가능한 약속, 성장 가능한 구조를 제공하는 것을 중요하게 생각합니다.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] bg-slate-50 p-5">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-display text-lg font-black tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
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
