const services = [
  {
    title: "Inbox & calendar",
    items: ["Email triage & replies", "Calendar scheduling", "Follow-ups"],
  },
  {
    title: "Lead generation",
    items: ["Prospect lists", "Cold outreach", "CRM updates"],
  },
  {
    title: "Customer calls",
    items: ["Inbound support", "Appointment booking", "Outbound follow-ups"],
  },
  {
    title: "Research",
    items: ["Market scans", "Customer interviews", "Report prep"],
  },
  {
    title: "Admin & data",
    items: ["Data entry", "Invoicing", "Document prep"],
  },
];

export function WhatWeDo() {
  return (
    <section id="services" className="border-b border-line/60">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow mb-4">What we do</div>
        <h2 className="max-w-[24ch] font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[44px]">
          What an Outpost assistant can actually do.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-line bg-cream-50 p-6 transition-colors hover:border-forest/30"
            >
              <h3 className="text-[15px] font-medium text-ink">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-[13px] text-ink-muted">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-line">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-coal p-6 text-cream-50">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-forest/30 blur-3xl"
            />
            <div className="relative">
              <h3 className="text-[15px] font-medium">The full catalogue</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-cream-50/70">
                80+ tasks sorted by what your business does.
              </p>
            </div>
            <a
              href="#catalogue"
              className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-cream-50 underline decoration-1 underline-offset-[6px]"
            >
              Browse all
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
