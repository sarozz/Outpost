"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; match: string };

const nav: NavItem[] = [
  { label: "How it works", href: "/#how-it-works", match: "/#how-it-works" },
  { label: "Services", href: "/services", match: "/services" },
  { label: "Pricing", href: "/pricing", match: "/pricing" },
  { label: "Trust", href: "/trust", match: "/trust" },
  { label: "About", href: "/about", match: "/about" },
  { label: "Contact", href: "/contact", match: "/contact" },
];

function isActive(pathname: string, match: string) {
  if (match.startsWith("/#")) return false;
  if (match === "/") return pathname === "/";
  return pathname === match || pathname.startsWith(`${match}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

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
          {nav.map((item) => {
            const active = isActive(pathname, item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative text-[13.5px] transition-colors",
                  active
                    ? "text-ink after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:h-px after:bg-forest"
                    : "text-ink/75 hover:text-ink",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/book"
          aria-current={pathname === "/book" ? "page" : undefined}
          className="rounded-md bg-forest px-4 py-2.5 text-[13px] font-medium text-cream-50 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Book a 15-min call
        </Link>
      </div>
    </header>
  );
}
