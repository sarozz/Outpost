import Link from "next/link";

const nav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trust", href: "/trust" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Outpost"
          className="group inline-flex items-baseline font-serif text-[22px] font-medium tracking-tight text-ink"
        >
          Outpost
          <span className="text-tomato transition-colors group-hover:text-tomato-dark">
            .
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/book"
          className="rounded-md bg-forest px-4 py-2.5 text-[13px] font-medium text-cream-50 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Book a 15-min call
        </Link>
      </div>
    </header>
  );
}
