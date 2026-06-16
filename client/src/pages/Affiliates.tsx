import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { affiliates } from "@/lib/site";
import { ArrowUpRight, Building2 } from "lucide-react";

export default function Affiliates() {
  return (
    <>
      <Seo
        title="계열사 | 오투HD"
        description="오투HD의 계열사를 한눈에 확인하고 각 계열사 공식 홈페이지로 이동할 수 있습니다."
        canonicalPath="/affiliates"
      />

      <PageHero
        eyebrow="Affiliate Companies"
        title="계열사"
        description="오투HD와 함께 독창적인 비즈니스 인프라를 공유하고, 지속 가능한 혁신과 가치를 실현해 나가는 계열사 네트워크입니다."
        contentClassName="w-full !max-w-none"
        descriptionClassName="w-full !max-w-[72rem] text-left ![text-wrap:auto]"
      />

      <section className="overflow-hidden py-12 sm:py-20">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-8 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">Otwo Network</p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl">계열사 목록</h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {affiliates.map((affiliate) => (
              <a
                key={affiliate.slug}
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_70px_rgba(15,56,99,0.13)]"
                aria-label={`${affiliate.name} 홈페이지 새 창으로 이동`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.30),transparent_34%),linear-gradient(135deg,#eff6ff_0%,#ffffff_46%,#dbeafe_100%)]">
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/86 px-4 py-2 text-xs font-extrabold text-slate-700 shadow-sm backdrop-blur-md">
                    <Building2 className="h-4 w-4 text-primary" />
                    {affiliate.relation}
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <div className="inline-flex min-h-20 min-w-20 items-center justify-center rounded-3xl bg-slate-950 px-5 font-display text-2xl font-black tracking-[-0.04em] text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)]">
                      OF
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-slate-950">{affiliate.name}</h3>
                      <p className="mt-1 text-sm font-bold text-primary">{affiliate.englishName}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 line-clamp-2 text-sm leading-7 text-slate-600">{affiliate.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-400">Visit Website</span>
                    <span className="text-sm font-extrabold text-slate-700 transition group-hover:text-primary">홈페이지 이동</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
