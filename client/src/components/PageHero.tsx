// Style reminder: Soft Futurism Corporate Minimalism — page heroes should be spacious, editorial, and anchored by calm blue accents.
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  descriptionClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, descriptionClassName, contentClassName, titleClassName, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className={cn("max-w-3xl min-w-0", contentClassName)}>
          <p className="font-monoish text-xs font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className={cn("page-hero-title mt-5 text-pretty font-display text-[clamp(2.25rem,10vw,3rem)] font-black leading-[1.12] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl", titleClassName)}>{title}</h1>
          <p className={cn("page-hero-description mt-6 text-pretty text-base leading-8 text-slate-600 sm:text-lg", descriptionClassName)}>{description}</p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
