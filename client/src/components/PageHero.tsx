// Style reminder: Soft Futurism Corporate Minimalism — page heroes should be spacious, editorial, and anchored by calm blue accents.
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-3xl min-w-0">
          <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="page-hero-title mt-5 text-pretty font-display text-[clamp(2.25rem,10vw,3rem)] font-black leading-[1.12] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="page-hero-description mt-6 text-pretty text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
