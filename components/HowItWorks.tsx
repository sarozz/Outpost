const steps = [
  {
    n: "1",
    title: "Sign up",
    body: "Pick a plan. Tell us about your business.",
    chip: "5 min",
  },
  {
    n: "2",
    title: "Meet your assistant",
    body: "Video call with your dedicated agent.",
    chip: "48 hrs",
  },
  {
    n: "3",
    title: "Submit tasks",
    body: "Portal, email, or Slack — your choice.",
    chip: "Any time",
  },
  {
    n: "4",
    title: "Get work back",
    body: "Daily updates, weekly reviews.",
    chip: "Same day",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line/60">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">How it works</div>
        <h2 className="max-w-[22ch] font-serif text-[32px] leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
          From sign-up to your first completed task — in under forty-eight hours.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col rounded-xl border border-line bg-cream-50 p-6"
            >
              <div className="font-serif text-[44px] leading-none text-ink">{s.n}</div>
              <div className="mt-5 text-[15px] font-medium text-ink">{s.title}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{s.body}</div>
              <div className="mt-5 inline-flex w-fit rounded-full border border-line bg-cream-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                {s.chip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
