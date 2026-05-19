import type { ReactNode } from "react";
import Link from "next/link";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="relative border-b border-line/60">
        <div className="relative mx-auto max-w-3xl px-6 pb-10 pt-16 md:px-10 md:pb-14 md:pt-24">
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.015em] text-ink md:text-[56px]">
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-muted">
            <span>Last updated: {updated}</span>
            <span aria-hidden className="text-line">·</span>
            <Link
              href="mailto:trust@outpost.com.au"
              className="underline decoration-1 underline-offset-[4px] hover:text-forest"
            >
              trust@outpost.com.au
            </Link>
          </div>

          <div className="mt-8 rounded-lg border border-tomato/30 bg-tomato/[0.06] px-4 py-3 text-[13px] leading-relaxed text-ink">
            <strong className="font-medium text-tomato-dark">Draft.</strong>{" "}
            Placeholder text for layout only. Replace before launch and have an
            Australian lawyer review.
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
          <article className="legal-prose">{children}</article>
        </div>
      </section>
    </main>
  );
}
