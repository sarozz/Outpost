const rows = [
  { label: "Data hosting", value: "AWS Sydney" },
  { label: "Privacy Act", value: "APP 1–13" },
  { label: "Insurance", value: "A$5M PI + Cyber" },
  { label: "Data deletion", value: "30 days post-exit" },
];

export function Trust() {
  return (
    <section id="trust" className="border-b border-line/60">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">Trust</div>
        <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
          Compliance, on the record.
        </h2>

        <div className="mt-10 rounded-xl border border-line bg-cream-50 p-6 md:p-8">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {rows.map((r) => (
              <div key={r.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                  {r.label}
                </dt>
                <dd className="mt-2 text-[15px] text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border-t border-line pt-6 text-center">
            <a
              href="#compliance"
              className="text-[14px] font-medium text-ink underline underline-offset-[6px] decoration-1 hover:text-forest"
            >
              See full compliance details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
