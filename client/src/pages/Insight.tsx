import { Link } from "wouter";
import { ArrowLeft, ArrowRight, LockKeyhole, Search, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

export function InsightDetail({ slug }: { slug?: string }) {
  const { data: post, isLoading } = trpc.insight.getBySlug.useQuery(
    { slug: slug ?? "" },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="py-24 text-center text-slate-400">불러오는 중...</div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500">게시글을 찾을 수 없습니다.</p>
        <Link href="/insight" className="mt-6 inline-flex items-center gap-2 text-primary font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" /> 인사이트 목록으로
        </Link>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} | 오투HD 인사이트`}
        description={post.summary ?? ""}
        canonicalPath={`/insight/${post.slug}`}
        type="article"
      />
      <article className="py-16 sm:py-24">
        <div className="container max-w-4xl">
          <Link href="/insight" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:-translate-y-1 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> 인사이트 목록
          </Link>
          {post.coverImageUrl && (
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="mt-10 w-full rounded-3xl object-cover max-h-80"
            />
          )}
          <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[0.32em] text-primary">{post.category}</p>
          <h1 className="mt-5 text-balance font-display text-4xl font-black leading-[1.08] tracking-[-0.065em] text-slate-950 sm:text-6xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-slate-500">
            <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          {post.summary && (
            <p className="mt-8 rounded-[1.7rem] bg-sky-50 p-6 text-lg font-semibold leading-9 text-slate-700">{post.summary}</p>
          )}
          <div className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/72 p-7 shadow-sm backdrop-blur-xl sm:p-10 prose prose-slate max-w-none">
            <Streamdown>{post.content}</Streamdown>
          </div>
        </div>
      </article>
    </>
  );
}

export default function Insight() {
  const { data: posts = [], isLoading } = trpc.insight.list.useQuery();

  return (
    <>
      <Seo
        title="인사이트 | 오투HD 브랜드 매거진"
        description="비즈니스 성장, 세일즈 인프라, 데이터 기반 운영을 다루는 오투HD의 SEO/AEO 브랜드 콘텐츠 허브입니다."
        keywords="비즈니스 인사이트, SEO, AEO, 비즈니스 성장, 세일즈 인프라, 데이터 운영, 오투HD"
        canonicalPath="/insight"
      />
      <PageHero
        eyebrow="비즈니스 성장 가이드"
        title="성과를 반복하는 비즈니스 성장 구조와 실행 전략"
        description="오투HD의 '비즈니스 성장 가이드'는 단순한 트렌드 전달을 넘어, 광고·영업·데이터 운영이 하나로 연결된 실전 성장 구조를 제시합니다. 잠재 고객 발굴부터 세일즈 인프라 구축, 영업 전환율을 높이는 데이터 리포팅까지 기업의 지속 가능한 성장을 위한 검증된 비즈니스 인사이트를 확인해 보세요."
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
        <div className="container">
          {isLoading ? (
            <div className="text-center py-16 text-slate-400">불러오는 중...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">아직 게시된 인사이트가 없습니다.</p>
              <p className="text-sm mt-2">곧 유용한 콘텐츠를 업로드할 예정입니다.</p>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/insight/${post.slug}`}
                  className="group reveal-up rounded-[2rem] border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_70px_rgba(15,56,99,0.1)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {post.coverImageUrl && (
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-2xl mb-5"
                    />
                  )}
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-black text-primary">{post.category}</span>
                    <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-black tracking-[-0.05em] text-slate-950 group-hover:text-primary">{post.title}</h2>
                  {post.summary && (
                    <p className="mt-4 text-base leading-7 text-slate-600 line-clamp-3">{post.summary}</p>
                  )}
                  <p className="mt-6 text-sm font-semibold text-slate-400">
                    {new Date(post.createdAt).toLocaleDateString("ko-KR")} · {post.readingTime}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
