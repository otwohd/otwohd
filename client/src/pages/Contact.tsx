// Style reminder: Soft Futurism Corporate Minimalism — form interactions should feel premium, approachable, and low-friction.
import { FormEvent } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Send, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { brand, contactIntents } from "@/lib/site";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("문의 초안이 접수된 것처럼 표시됩니다. 실제 발송 연동은 추후 백엔드 또는 외부 폼 서비스 연결이 필요합니다.");
    event.currentTarget.reset();
  };

  return (
    <>
      <Seo
        title="문의하기 | 오투HD 파트너십 의뢰"
        description="종합영업대행사 오투HD에 위탁영업 컨설팅, 광고대행, 공동투자, 파트너십 문의를 남겨주세요."
        keywords="오투HD 문의, 위탁영업 문의, 종합영업대행사 상담, 광고대행 문의, 공동투자 제안"
        canonicalPath="/contact"
      />
      <PageHero eyebrow="Contact" title="성장 구조를 함께 설계할 파트너를 기다립니다." description="위탁영업 컨설팅, 자체DB추출 기반 영업 실행, 광고대행, 공동투자 제안이 필요하다면 아래 폼으로 문의 내용을 남겨주세요." />

      <section className="pb-12 sm:pb-20">
        <div className="container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
            <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Otwo Holdings</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.06em]">파트너십 상담 정보</h2>
            <div className="mt-8 grid gap-5">
              <div className="flex gap-4">
                <UserRound className="mt-1 h-5 w-5 text-cyan-200" />
                <div><p className="font-bold">대표이사</p><p className="mt-1 text-slate-300">{brand.ceo}</p></div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-cyan-200" />
                <div><p className="font-bold">소재지</p><p className="mt-1 text-slate-300">{brand.address}</p></div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-cyan-200" />
                <div><p className="font-bold">문의 유형</p><p className="mt-1 text-slate-300">컨설팅 · 위탁영업 · 광고대행 · 공동투자</p></div>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200/80 bg-white/86 p-6 shadow-sm backdrop-blur-xl sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">회사명<input required name="company" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="예: 오투파트너스" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">담당자명<input required name="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="성함을 입력하세요" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">연락처<input required name="phone" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="010-0000-0000" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">이메일<input required type="email" name="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="hello@example.com" /></label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">문의 유형<select required name="intent" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"><option value="">선택하세요</option>{contactIntents.map((intent) => <option key={intent} value={intent}>{intent}</option>)}</select></label>
            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">문의 내용<textarea required name="message" rows={7} className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="현재 상황, 희망하는 협력 방식, 목표 등을 자유롭게 적어주세요." /></label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-[0_18px_45px_rgba(0,119,255,0.25)] transition hover:-translate-y-0.5 md:w-auto">
              문의 초안 보내기 <Send className="h-4 w-4" />
            </button>
            <p className="mt-4 text-sm leading-6 text-slate-500">현재 초안은 정적 웹사이트 기준입니다. 실제 이메일 발송, CRM 저장, 관리자 알림은 추후 백엔드 또는 외부 폼 서비스 연동으로 구현할 수 있습니다.</p>
          </form>
        </div>
      </section>
    </>
  );
}
