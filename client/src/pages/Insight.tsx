// Style reminder: Soft Futurism Corporate Minimalism — insights should resemble a clean B2B magazine with SEO-friendly hierarchy.
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { insights } from "@/lib/site";

export function InsightDetail({ slug }: { slug?: string }) {
  const article = insights.find((item) => item.slug === slug) ?? insights[0];
  return (
    <>
      <Seo
        title={`${article.title} | 오투HD Insight`}
        description={article.summary}
        keywords={article.keywords.join(", ")}
        canonicalPath={`/insight/${article.slug}`}
        type="article"
      />
      <article className="py-16 sm:py-24">
        <div className="container max-w-4xl">
          <Link href="/insight" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> 목록으로
          </Link>
          <p className="mt-10 font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">{article.category}</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-500">
            <span>{article.date}</span><span>·</span><span>{article.readingTime}</span>
          </div>
          <p className="mt-8 rounded-[1.5rem] bg-sky-50 p-6 text-lg font-semibold leading-8 text-slate-700">{article.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm">#{keyword}</span>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10">
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
        title="Insight 게시판 | 오투HD AEO/SEO 매거진"
        description="종합영업대행사, 자체DB추출, 위탁영업 컨설팅 관련 실무 인사이트를 제공하는 오투HD 매거진형 게시판입니다."
        keywords="종합영업대행사, 자체DB추출, 위탁영업 컨설팅, AEO, SEO, 영업 인사이트"
        canonicalPath="/insight"
      />
      <PageHero eyebrow="Insight Magazine" title="검색에 강하고 읽기 쉬운 오투HD 인사이트 게시판" description="일반 사용자는 게시글을 열람하고, 포스팅 권한은 관리자에게만 부여되는 구조로 설계했습니다. 본 초안은 정적 홈페이지 기준의 열람형 게시판이며, 실제 관리자 작성 기능은 향후 인증과 데이터베이스 연동으로 확장할 수 있습니다.">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
          <LockKeyhole className="h-4 w-4 text-primary" /> 관리자만 포스팅 가능 · 일반 유저는 열람 전용
        </div>
      </PageHero>

      <section className="pb-12 sm:pb-20">
        <div className="container grid gap-5 lg:grid-cols-3">
          {insights.map((article) => (
            <Link key={article.slug} href={`/insight/${article.slug}`} className="group rounded-[2rem] border border-slate-200/80 bg-white/82 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,56,99,0.12)]">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-primary">{article.category}</span>
                <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-black tracking-[-0.05em] text-slate-950">{article.title}</h2>
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
