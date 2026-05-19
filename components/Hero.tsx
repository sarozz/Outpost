export function Hero() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto grid max-w-page gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-10 md:py-24">
        <div className="flex flex-col">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-1.5 text-[12px] text-ink/80">
            Australian-managed
            <span className="text-line">·</span>
            Offshore-delivered
          </div>

          <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.01em] text-ink md:text-[64px]">
            Your dedicated assistant, from twenty-two dollars an hour.
          </h1>

          <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
            Managed from Australia. Delivered by trained agents in Nepal and India.
            One person assigned to you — not a pool, not a queue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
            >
              See how it works <span aria-hidden>→</span>
            </a>
            <a
              href="#pricing"
              className="text-[14px] font-medium text-ink underline underline-offset-[6px] decoration-1 hover:text-forest"
            >
              View pricing
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-muted">
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
    <aside className="self-start rounded-xl border border-line bg-cream-50 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="eyebrow mb-5">Your assistant</div>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest font-medium text-cream-50">
          AK
        </div>
        <div>
          <div className="text-[15px] font-medium text-ink">Aarav K.</div>
          <div className="text-[13px] text-ink-muted">
            Kathmandu <span className="text-line">·</span>{" "}
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-light" />
              Online
            </span>
          </div>
        </div>
      </div>

      <div className="my-5 divider" />

      <div className="eyebrow mb-2">This week</div>
      <div className="text-[14px] text-ink">
        12 emails <span className="text-line">·</span> 8 calls{" "}
        <span className="text-line">·</span> 23 leads
      </div>

      <div className="mt-5 rounded-lg bg-forest/8 px-4 py-3 text-[13px] leading-relaxed text-forest-dark">
        <span className="font-medium">✓ Followed up with 4 leads</span> — 2 booked
        discovery calls.
      </div>
    </aside>
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
