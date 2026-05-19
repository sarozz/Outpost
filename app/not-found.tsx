import Link from "next/link";

const suggestions = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trust", href: "/trust" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main>
      <section className="relative border-b border-line/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(31,77,60,0.05),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-page px-6 py-20 text-center md:px-10 md:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-tomato">
            404 · Not found
          </div>
          <h1 className="mx-auto mt-5 max-w-[22ch] font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.015em] text-ink md:text-[64px]">
            We couldn&apos;t find that page.
          </h1>
          <p className="mx-auto mt-5 max-w-[48ch] text-[16px] leading-relaxed text-ink-muted">
            The link might be old, or we may have moved something. Try the
            homepage, or pick one of the routes below.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
            >
              Go home →
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] hover:text-forest"
            >
              Email us
            </Link>
          </div>

          <ul className="mx-auto mt-14 flex max-w-[44ch] flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] text-ink-muted">
            {suggestions.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="hover:text-ink">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
