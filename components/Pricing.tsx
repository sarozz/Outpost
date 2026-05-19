const tiers = [
  {
    name: "Starter",
    price: "A$220",
    sub: "10 hrs · A$22/hr",
    popular: false,
  },
  {
    name: "Growth",
    price: "A$800",
    sub: "40 hrs · A$20/hr",
    popular: true,
  },
  {
    name: "Scale",
    price: "A$1,440",
    sub: "80 hrs · A$18/hr",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line/60">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">Pricing</div>
        <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
          Three tiers. All public. No call required.
        </h2>
        <p className="mt-3 text-[15px] text-ink-muted">
          Start small, scale when you need to. Cancel anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-xl border p-6",
                t.popular
                  ? "border-forest bg-cream-50 ring-1 ring-forest/30"
                  : "border-line bg-cream-50",
              ].join(" ")}
            >
              <div className="flex items-baseline gap-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {t.name}
                </div>
                {t.popular && (
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-forest">
                    · Popular
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <div className="font-serif text-[40px] leading-none tracking-[-0.01em] text-ink">
                  {t.price}
                </div>
                <div className="text-[13px] text-ink-muted">/mo</div>
              </div>
              <div className="mt-3 text-[13px] text-ink-muted">{t.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#pricing-details"
            className="text-[14px] font-medium text-ink underline underline-offset-[6px] decoration-1 hover:text-forest"
          >
            See full pricing details →
          </a>
        </div>
      </div>
    </section>
  );
}
