// Style reminder: Soft Futurism Corporate Minimalism — technology should look operational and reliable, not cold or overly dark.
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { assetUrls, techPillars } from "@/lib/site";

export default function Technology() {
  return (
    <>
      <Seo
        title="기술력 | 오투HD 자체DB추출 · 전국 TM 센터"
        description="오투HD의 자체 DB 추출 프로그램과 인천, 시흥, 광주 전국 단위 TM 조직 인프라를 소개합니다."
        keywords="자체DB추출, DB 추출 프로그램, TM 센터, 인천 TM, 시흥 TM, 광주 TM, 위탁영업 컨설팅"
        canonicalPath="/technology"
      />
      <PageHero eyebrow="Technology & Infrastructure" title="자체DB추출과 전국 TM 조직이 오투HD의 실행력을 만듭니다." description="오투HD는 데이터 확보와 상담 실행을 분리하지 않습니다. 자체 프로그램, 운영 거점, 리포팅 구조를 연결해 영업 실행의 속도와 품질을 높입니다." />

      <section className="pb-12 sm:pb-20">
        <div className="container">
          <img src={assetUrls.tech} alt="오투HD 자체DB추출 프로그램과 전국 TM 센터 인프라" className="w-full rounded-[2rem] border border-white bg-white shadow-[0_32px_90px_rgba(15,56,99,0.13)]" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {techPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm backdrop-blur-xl">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-7 font-display text-2xl font-black tracking-[-0.05em] text-slate-950">{pillar.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Network</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em]">인천, 시흥, 광주를 연결하는 TM 운영 기반</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">분산형 거점은 캠페인 규모와 상담량 변화에 유연하게 대응하고, 지역·업종별 테스트와 확장을 동시에 가능하게 합니다.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["인천", "시흥", "광주"].map((city) => (
              <div key={city} className="rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm">
                <p className="font-monoish text-xs font-bold uppercase tracking-[0.24em] text-primary">TM Center</p>
                <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.06em] text-slate-950">{city}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">상담 실행, 캠페인 운영, 성과 피드백을 연결하는 거점형 운영 노드입니다.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
