import { Link } from "wouter";
import { ArrowLeft, ArrowRight, LockKeyhole, Search } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { insights } from "@/lib/site";

export function InsightDetail({ slug }: { slug?: string }) {
  const article = insights.find((item) => item.slug === slug) ?? insights[0];
  return (
    <>
      <Seo
        title={`${article.title} | 오투HD 인사이트`}
        description={article.summary}
        keywords={article.keywords.join(", ")}
        canonicalPath={`/insight/${article.slug}`}
        type="article"
      />
      <article className="py-16 sm:py-24">
        <div className="container max-w-4xl">
          <Link href="/insight" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:-translate-y-1 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> 인사이트 목록
          </Link>
          <p className="mt-10 font-monoish text-xs font-bold uppercase tracking-[0.32em] text-primary">{article.category}</p>
          <h1 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-6xl">{article.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-slate-500">
            <span>{article.date}</span><span>·</span><span>{article.readingTime}</span>
          </div>
          <p className="mt-8 rounded-[1.7rem] bg-sky-50 p-6 text-lg font-semibold leading-9 text-slate-700">{article.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-primary shadow-sm">#{keyword}</span>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/72 p-7 shadow-sm backdrop-blur-xl sm:p-10">
            <p className="whitespace-pre-line text-lg leading-9 text-slate-700">{article.body}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default function Insight() {
  return (
    <>
      <Seo
        title="인사이트 | 오투HD 브랜드 매거진"
        description="비즈니스 성장, 세일즈 인프라, 데이터 기반 운영을 다루는 오투HD의 SEO/AEO 브랜드 콘텐츠 허브입니다."
        keywords="비즈니스 인사이트, SEO, AEO, 비즈니스 성장, 세일즈 인프라, 데이터 운영, 오투HD"
        canonicalPath="/insight"
      />
      <PageHero
        eyebrow="인사이트 매거진"
        title="검색에 강하고 브랜드 전문성을 보여주는 콘텐츠 허브"
        description="인사이트는 단순 공지사항이 아니라 비즈니스 성장 관점의 브랜드 매거진입니다. 카테고리, 태그, SEO 친화 URL을 기반으로 전문성과 검색 유입을 함께 설계합니다."
      >
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            <LockKeyhole className="h-4 w-4 text-primary" /> 관리자만 포스팅 가능 · 일반 유저 열람 전용
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            <Search className="h-4 w-4 text-primary" /> Category · Tag · SEO URL
          </div>
        </div>
      </PageHero>

      <section className="pb-12 sm:pb-20">
        <div className="container grid gap-5 lg:grid-cols-3">
          {insights.map((article, index) => (
            <Link key={article.slug} href={`/insight/${article.slug}`} className="group reveal-up rounded-[2rem] border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_rgba(15,56,99,0.1)]" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-black text-primary">{article.category}</span>
                <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-black tracking-[-0.05em] text-slate-950 group-hover:text-primary">{article.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{article.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{keyword}</span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-slate-400">{article.date} · {article.readingTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
