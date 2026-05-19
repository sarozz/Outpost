import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-line/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(31,77,60,0.05),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h1 className="max-w-[20ch] font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.015em] text-ink md:text-[64px]">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-ink-muted">
            {lede}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
