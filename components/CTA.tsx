export function CTA() {
  return (
    <section id="book" className="bg-coal text-cream-50">
      <div className="mx-auto max-w-page px-6 py-20 text-center md:px-10 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Ready?
        </div>
        <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[36px] leading-[1.1] tracking-[-0.01em] md:text-[52px]">
          Stop doing your own admin at eleven o&apos;clock at night.
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-[15px] leading-relaxed text-cream-50/70">
          Pick a plan, meet your assistant within 48 hours, never look at another
          scheduling email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-md bg-cream-50 px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-100"
          >
            See pricing →
          </a>
          <a
            href="#book-call"
            className="rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-light"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  );
}
