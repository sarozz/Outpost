import Link from "next/link";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Trust", href: "#trust" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line/60">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-serif text-[22px] font-medium tracking-tight text-ink">
          Outpost<span className="text-forest">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="rounded-md bg-forest px-4 py-2.5 text-[13px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
        >
          Book a 15-min call
        </a>
      </div>
    </header>
  );
}
