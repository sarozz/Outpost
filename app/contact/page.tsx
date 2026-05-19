import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a human at Outpost. General hello, sales, trust & privacy, and support — each goes to a specific inbox we read every working day.",
};

const channels = [
  {
    eyebrow: "General",
    title: "Say hello",
    body: "Anything that doesn't fit the boxes below. We read every email and reply inside a working day.",
    href: "mailto:hello@outpost.com.au",
    cta: "hello@outpost.com.au",
  },
  {
    eyebrow: "Sales",
    title: "Talk to sales",
    body: "Looking at plans for your business? Book a 15-minute call with our Australian account lead — no deck, no pitch.",
    href: "/book",
    cta: "Book a 15-min call →",
  },
  {
    eyebrow: "Trust & privacy",
    title: "Compliance enquiries",
    body: "DPA requests, certificates of insurance, security questionnaires, and Privacy Act questions go to our Privacy Officer.",
    href: "mailto:trust@outpost.com.au",
    cta: "trust@outpost.com.au",
  },
  {
    eyebrow: "Existing customers",
    title: "Support",
    body: "Already on a plan? Email us or message your assistant directly. Urgent issues outside business hours: SMS the number on your welcome email.",
    href: "mailto:support@outpost.com.au",
    cta: "support@outpost.com.au",
  },
];

const offices = [
  {
    city: "Perth",
    country: "Australia",
    role: "HQ — operations & account leads",
    address: "Level 1, 100 St Georges Tce, Perth WA 6000",
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    role: "Delivery — inbox, calendar, research",
    address: "Naxal, Kathmandu",
  },
  {
    city: "Bengaluru",
    country: "India",
    role: "Delivery — calls, lead gen, admin",
    address: "Indiranagar, Bengaluru",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a human.</>}
        lede="No chatbot, no contact-form-blackhole. Pick the inbox that fits — we'll reply inside a working day."
      />

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <article
                key={c.eyebrow}
                className="flex flex-col rounded-xl border border-line bg-cream-50 p-6 transition-colors hover:border-forest/30"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {c.eyebrow}
                </div>
                <h2 className="mt-3 font-serif text-[22px] font-medium tracking-[-0.015em] text-ink md:text-[26px]">
                  {c.title}
                </h2>
                <p className="mt-3 max-w-[44ch] text-[14px] leading-relaxed text-ink-muted">
                  {c.body}
                </p>
                <Link
                  href={c.href}
                  className="mt-6 inline-flex w-fit items-center text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] hover:text-forest"
                >
                  {c.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
          <div className="eyebrow mb-3">Offices</div>
          <h2 className="font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[36px]">
            Where to find us.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {offices.map((o) => (
              <div
                key={o.city}
                className="rounded-xl border border-line bg-cream-50 p-6"
              >
                <div className="font-serif text-[24px] font-medium tracking-[-0.015em] text-ink">
                  {o.city}
                </div>
                <div className="text-[13px] text-ink-muted">{o.country}</div>
                <div className="mt-4 border-t border-line pt-4 text-[13px] text-ink-muted">
                  {o.role}
                </div>
                <div className="mt-3 text-[13px] text-ink/85">{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream-50">
        <div className="mx-auto max-w-page px-6 py-14 md:px-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="eyebrow mb-3">Press & partnerships</div>
              <h2 className="font-serif text-[24px] font-medium tracking-[-0.015em] text-ink md:text-[30px]">
                Writing about us, or working together?
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-ink-muted">
                Media kits, founder interviews, integrations — same inbox.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="mailto:press@outpost.com.au"
                className="inline-flex rounded-md border border-line bg-cream px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                press@outpost.com.au →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
