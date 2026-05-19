"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll when menu open on mobile
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            aria-current={pathname === "/book" ? "page" : undefined}
            className="hidden rounded-md bg-forest px-4 py-2.5 text-[13px] font-medium text-cream-50 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:inline-flex"
          >
            Book a 15-min call
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-cream-50 text-ink transition-colors hover:border-forest hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:hidden"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line/60 bg-cream md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-page px-6 py-2">
          <ul className="divide-y divide-line/60">
            {nav.map((item) => {
              const active = isActive(pathname, item.match);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center justify-between py-3.5 text-[15px]",
                      active ? "text-ink" : "text-ink/80",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-forest"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/book"
            className="my-4 inline-flex w-full items-center justify-center rounded-md bg-forest px-4 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
          >
            Book a 15-min call
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M5 5l10 10" />
          <path d="M15 5L5 15" />
        </>
      ) : (
        <>
          <path d="M3 6h14" />
          <path d="M3 10h14" />
          <path d="M3 14h14" />
        </>
      )}
    </svg>
  );
}
