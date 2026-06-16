import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { brand, milestones, trustSignals } from "@/lib/site";

export default function About() {
  return (
    <>
      <Seo
        title="소개 | 오투HD 브랜드 철학"
        description="오투HD의 성장 여정, 브랜드 철학, 성장 구조 설계 그룹으로의 전환을 소개합니다."
        canonicalPath="/about"
      />
      <PageHero
        eyebrow="오투HD 소개"
        title="오투HD는 실행 경험 위에 만들어진 비즈니스 성장 그룹입니다."
        description={brand.foundedStory}
        contentClassName="lg:max-w-6xl"
        titleClassName="lg:max-w-3xl"
        descriptionClassName="lg:max-w-6xl lg:[text-wrap:wrap]"
      />

      <section className="overflow-hidden py-10 sm:py-16">
        <div className="container grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start [&>*]:min-w-0">
          <div className="reveal-up min-w-0 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_34px_100px_rgba(15,23,42,0.16)] sm:p-10">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-sky-200">Brand Philosophy</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] sm:text-5xl">비즈니스는 광고만으로 성장하지 않습니다.</h2>
            <p className="mt-7 text-lg leading-9 text-slate-300">오투HD는 영업, 운영, 데이터, 실행 구조가 함께 움직일 때 지속 가능한 성장이 만들어진다고 믿습니다. 그래서 우리는 단순 대행보다 성장 구조를 먼저 설계합니다.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="reveal-up min-w-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/64 p-6 shadow-sm backdrop-blur-xl" style={{ animationDelay: `${index * 100}ms` }}>
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-6 font-display text-xl font-black tracking-[-0.04em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container grid min-w-0 gap-10 lg:grid-cols-[0.7fr_1.3fr] [&>*]:min-w-0">
          <div className="reveal-up h-fit lg:sticky lg:top-28">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">History</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-5xl">오투스퀘어에서 오투HD로</h2>
            <p className="mt-7 text-lg leading-9 text-slate-600">현장 중심 실행 경험을 기반으로 컨설팅, 광고, 세일즈 인프라, 데이터 운영을 아우르는 그룹 체계로 확장했습니다.</p>
          </div>
          <div className="grid gap-5">
            {milestones.map((item) => (
              <article key={item.year} className="reveal-up min-w-0 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/64 p-7 shadow-sm backdrop-blur-xl">
                <p className="font-monoish text-4xl font-bold tracking-[-0.08em] text-primary">{item.year}</p>
                <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.045em] text-slate-950">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <div className="container min-w-0 overflow-hidden rounded-[3rem] border border-slate-200/80 bg-white/65 p-8 shadow-sm backdrop-blur-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Company Information</p>
              <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-[-0.06em] text-slate-950">신뢰 가능한 파트너십을 위해 기본 정보를 명확하게 공개합니다.</h2>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">대표이사</p>
                <p className="mt-2 font-display text-2xl font-black text-slate-950">{brand.ceo}</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">주소</p>
                <p className="mt-2 text-lg font-bold leading-8 text-slate-950">{brand.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
