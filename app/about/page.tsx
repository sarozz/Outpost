import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About — Outpost",
  description:
    "Why we built Outpost. Australian-managed offshore admin for small businesses, run by a small team in Perth, Kathmandu, and Bengaluru.",
};

const principles = [
  {
    title: "One person, not a pool",
    body: "You get a named assistant who learns your business. No round-robin queues, no re-explaining context.",
  },
  {
    title: "Public pricing",
    body: "Three tiers, one rate card. If we change pricing it's the same for everyone, and we'll give notice.",
  },
  {
    title: "Australian accountability",
    body: "An AU account lead is on the contract and on the phone. The work is delivered offshore — the responsibility isn't.",
  },
  {
    title: "Fair offshore pay",
    body: "We pay top-quartile salaries in Kathmandu and Bengaluru. Sustainable rates beat low rates we have to discount later.",
  },
];

const locations = [
  {
    city: "Perth",
    country: "Australia",
    role: "HQ · Account leads & ops",
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    role: "Delivery · Inbox, calendar, research",
  },
  {
    city: "Bengaluru",
    country: "India",
    role: "Delivery · Calls, lead gen, admin",
  },
];

const timeline = [
  {
    year: "2022",
    body: "Founders Tom and Priya run admin themselves for two small Perth businesses, then start looking for a service that doesn't feel like a call centre.",
  },
  {
    year: "2023",
    body: "Outpost starts as a side project: one assistant in Kathmandu, four customers, a Google Sheet for tasks.",
  },
  {
    year: "2024",
    body: "Hire AU lead, formalise hiring, move data into AWS Sydney, take PI insurance. Pricing goes public.",
  },
  {
    year: "2025",
    body: "Open Bengaluru delivery for calls and CRM-heavy work. 60+ customers on Growth or Scale.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={<>Australian-managed. Delivered by people we know.</>}
        lede="Outpost is a small team in Perth, Kathmandu, and Bengaluru. We started this because the existing options were either expensive AU VAs or call-centre-style offshore — and we wanted neither."
      />

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="eyebrow mb-3">Why we built it</div>
              <h2 className="font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[36px]">
                The middle was missing.
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/85 md:text-[16px]">
              <p>
                In Australia, hiring an admin assistant locally runs $35–$55 an
                hour. Most small businesses can&apos;t justify it for the work
                involved — inbox triage, calendar wrangling, follow-ups — so
                the founder ends up doing it at 11pm.
              </p>
              <p>
                The offshore alternative is usually a pool model: tickets in,
                whoever&apos;s free takes them, context starts from scratch
                every time. It&apos;s cheap and it shows.
              </p>
              <p>
                Outpost is a third option. One named person, managed by an
                Australian account lead, paid a top-quartile wage where they
                live, charged at a rate small businesses can actually
                sustain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow mb-3">How we work</div>
          <h2 className="font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[36px]">
            Four principles, all on the record.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-line bg-cream-50 p-6"
              >
                <h3 className="text-[16px] font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow mb-3">Where we are</div>
          <h2 className="font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[36px]">
            Three offices, one team.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {locations.map((l) => (
              <div
                key={l.city}
                className="rounded-xl border border-line bg-cream-50 p-6"
              >
                <div className="font-serif text-[22px] font-medium tracking-[-0.015em] text-ink">
                  {l.city}
                </div>
                <div className="text-[13px] text-ink-muted">{l.country}</div>
                <div className="mt-4 border-t border-line pt-4 text-[13px] text-ink-muted">
                  {l.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow mb-3">Story</div>
          <h2 className="font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[36px]">
            The short version.
          </h2>

          <ol className="mt-10 space-y-8 border-l border-line pl-6 md:pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-forest md:-left-[37px]"
                />
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {t.year}
                </div>
                <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-ink/85">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream-50">
        <div className="mx-auto max-w-page px-6 py-14 md:px-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="eyebrow mb-3">Talk to a human</div>
              <h2 className="font-serif text-[24px] font-medium tracking-[-0.015em] text-ink md:text-[30px]">
                Or just send us an email.
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-ink-muted">
                We read everything that lands at hello@. Replies usually inside
                a working day.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="mailto:hello@outpost.com.au"
                className="inline-flex rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
              >
                hello@outpost.com.au →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
