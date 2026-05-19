import Link from "next/link";

export function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-coal text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(31,77,60,0.25),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream-50/20 to-transparent"
      />

      <div className="relative mx-auto max-w-page px-6 py-20 text-center md:px-10 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Ready?
        </div>
        <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[36px] font-medium leading-[1.08] tracking-[-0.015em] md:text-[56px]">
          Stop doing your own admin at eleven o&apos;clock at night.
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed text-cream-50/70">
          Pick a plan, meet your assistant within 48 hours, never look at another
          scheduling email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/pricing"
            className="rounded-md bg-cream-50 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-100"
          >
            See pricing →
          </Link>
          <Link
            href="/book"
            className="rounded-md border border-cream-50/20 bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-light"
          >
            Book a 15-min call
          </Link>
        </div>
      </div>
    </section>
  );
}
