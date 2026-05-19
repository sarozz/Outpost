import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "A$220",
    sub: "10 hrs · A$22/hr",
    blurb: "For solo operators getting started.",
    popular: false,
  },
  {
    name: "Growth",
    price: "A$800",
    sub: "40 hrs · A$20/hr",
    blurb: "For teams ready to delegate weekly.",
    popular: true,
  },
  {
    name: "Scale",
    price: "A$1,440",
    sub: "80 hrs · A$18/hr",
    blurb: "For businesses with full-time admin needs.",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">Pricing</div>
        <h2 className="font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[44px]">
          Three tiers. All public. No call required.
        </h2>
        <p className="mt-3 text-[15px] text-ink-muted">
          Start small, scale when you need to. Cancel anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "relative flex flex-col rounded-xl p-6",
                t.popular
                  ? "border-2 border-forest bg-cream-50 shadow-[0_24px_60px_-30px_rgba(22,58,45,0.35)] md:-my-2"
                  : "border border-line bg-cream-50",
              ].join(" ")}
            >
              {t.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-forest px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-50">
                  Most popular
                </span>
              )}

              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {t.name}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <div className="font-serif text-[44px] font-medium leading-none tracking-[-0.02em] text-ink">
                  {t.price}
                </div>
                <div className="text-[13px] text-ink-muted">/mo</div>
              </div>
              <div className="mt-2 text-[13px] text-ink-muted">{t.sub}</div>

              <p className="mt-5 text-[13.5px] leading-relaxed text-ink-muted">
                {t.blurb}
              </p>

              <Link
                href="/book"
                className={[
                  "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[13px] font-medium transition-colors",
                  t.popular
                    ? "bg-forest text-cream-50 hover:bg-forest-dark"
                    : "border border-line bg-transparent text-ink hover:border-forest hover:text-forest",
                ].join(" ")}
              >
                Choose {t.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#pricing-details"
            className="text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] hover:text-forest"
          >
            See full pricing details →
          </a>
        </div>
      </div>
    </section>
  );
}
