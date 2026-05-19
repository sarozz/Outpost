const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Trust", href: "/trust" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Data Handling", href: "/trust#data" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60 bg-cream">
      <div className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-baseline font-serif text-[22px] font-medium tracking-tight text-ink">
              Outpost<span className="text-tomato">.</span>
            </div>
            <p className="mt-3 max-w-[32ch] text-[13px] leading-relaxed text-ink-muted">
              Australian-managed offshore admin for small businesses.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <div className="eyebrow mb-4">{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-ink/80 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[12px] text-ink-muted">
          <div>
            © 2026 Outpost Admin Pty Ltd <span className="text-line">·</span> ABN 00
            000 000 000 <span className="text-line">·</span> Perth, WA
          </div>
          <a
            href="mailto:hello@outpost.com.au"
            className="transition-colors hover:text-ink"
          >
            hello@outpost.com.au
          </a>
        </div>
      </div>
    </footer>
  );
}
