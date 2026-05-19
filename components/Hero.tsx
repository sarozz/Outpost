export function Hero() {
  return (
    <section className="relative border-b border-line/60">
      {/* subtle radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(31,77,60,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-page items-start gap-12 px-6 py-16 md:grid-cols-[1.25fr_1fr] md:gap-16 md:px-10 md:py-24">
        <div className="flex flex-col">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-1.5 text-[12px] text-ink/80">
            <span className="h-1.5 w-1.5 rounded-full bg-tomato" aria-hidden />
            Australian-managed
            <span className="text-line">·</span>
            Offshore-delivered
          </div>

          <h1 className="font-serif text-[42px] font-medium leading-[1.04] tracking-[-0.015em] text-ink md:text-[64px]">
            Your dedicated assistant, from twenty-two dollars an hour.
          </h1>

          <p className="mt-7 max-w-[46ch] text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
            Managed from Australia. Delivered by trained agents in Nepal and India.
            One person assigned to you — not a pool, not a queue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              See how it works
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#pricing"
              className="text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] transition-colors hover:text-forest"
            >
              View pricing
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-muted">
            {["Privacy Act-aligned", "AU data hosting", "Cancel anytime"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-forest" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <AssistantCard />
      </div>
    </section>
  );
}

function AssistantCard() {
  return (
    <aside className="relative self-start rounded-2xl border border-line bg-cream-50 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-24px_rgba(22,58,45,0.18)]">
      <div className="eyebrow mb-5">Your assistant</div>

      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full bg-forest font-serif text-[18px] font-medium text-cream-50 ring-1 ring-forest-dark/40"
          aria-hidden
        >
          AK
        </div>
        <div>
          <div className="text-[15px] font-medium text-ink">Aarav K.</div>
          <div className="flex items-center gap-1.5 text-[13px] text-ink-muted">
            Kathmandu
            <span className="text-line">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="relative inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-forest-light" />
                <span className="absolute inset-0 animate-ping rounded-full bg-forest-light/60" />
              </span>
              Online
            </span>
          </div>
        </div>
      </div>

      <div className="my-5 divider" />

      <div className="eyebrow mb-2">This week</div>
      <div className="flex items-baseline gap-4 text-[14px] text-ink">
        <Stat label="emails" value="12" />
        <span className="text-line">·</span>
        <Stat label="calls" value="8" />
        <span className="text-line">·</span>
        <Stat label="leads" value="23" />
      </div>

      <div className="mt-5 rounded-lg bg-forest/10 px-4 py-3 text-[13px] leading-relaxed text-forest-dark">
        <span className="font-medium">✓ Followed up with 4 leads</span> — 2 booked
        discovery calls.
      </div>
    </aside>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span className="font-medium">{value}</span>
      <span className="text-ink-muted">{label}</span>
    </span>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
