import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "80+ tasks your Outpost assistant can run end-to-end. Inbox & calendar, lead generation, customer calls, research, admin & data, and more.",
};

const categories = [
  {
    name: "Inbox & calendar",
    blurb: "Your inbox kept current; your calendar kept honest.",
    items: [
      "Email triage with priority labels",
      "Drafting replies in your voice",
      "Unsubscribing & inbox hygiene",
      "Meeting scheduling across timezones",
      "Calendar audits — buffers, focus blocks",
      "Reminders, RSVPs, follow-ups",
      "Travel arrangements & itineraries",
      "Expense reconciliation post-trip",
    ],
  },
  {
    name: "Lead generation",
    blurb: "Pipelines that don't dry up between launches.",
    items: [
      "ICP-tight prospect lists",
      "LinkedIn outreach & connection requests",
      "Cold email sequences",
      "Reply triage & meeting bookings",
      "CRM hygiene & deduplication",
      "Enrichment via Apollo / Clay / Hunter",
      "Conference attendee research",
      "Re-engagement campaigns for dormant leads",
    ],
  },
  {
    name: "Customer calls",
    blurb: "A human voice on the line during business hours.",
    items: [
      "Inbound phone support (AU number provided)",
      "Live chat coverage 9–6 AEST",
      "Appointment booking & confirmation",
      "Outbound follow-up calls",
      "After-hours voicemail triage",
      "Quote requests & intake forms",
      "Reschedules & cancellations",
      "Post-call CRM notes",
    ],
  },
  {
    name: "Research",
    blurb: "Reading the internet so you don't have to.",
    items: [
      "Competitor scans & feature matrices",
      "Customer interview recruitment",
      "Survey design & analysis",
      "Market sizing & TAM estimates",
      "Supplier & vendor comparisons",
      "Industry report summaries",
      "Pricing benchmarks",
      "Social listening on named accounts",
    ],
  },
  {
    name: "Admin & data",
    blurb: "The unglamorous work that keeps the business legible.",
    items: [
      "Invoice creation & dispatch",
      "Accounts receivable follow-up",
      "Receipt capture & categorisation",
      "Data entry into Xero / MYOB",
      "Document formatting (Word / Pages)",
      "Slide cleanup & template enforcement",
      "Contract collation & e-signature chasing",
      "Spreadsheet building & maintenance",
    ],
  },
  {
    name: "Operations",
    blurb: "Standard operating procedures, lived in.",
    items: [
      "SOP drafting from your screen recordings",
      "Project tracking in Asana / Linear / Notion",
      "Vendor onboarding & paperwork",
      "Internal newsletter drafting",
      "Recruitment screening & scheduling",
      "Onboarding new hires",
      "Stocktake & inventory entry",
      "Compliance log keeping",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={<>The full catalogue.</>}
        lede="Six categories. 80+ tasks. One person who learns your business and runs them end-to-end — not a ticket queue."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
          >
            See pricing →
          </Link>
          <Link
            href="/book"
            className="text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] hover:text-forest"
          >
            Book a 15-min call
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-14 md:space-y-20">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-16"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                  </div>
                  <h2 className="mt-3 font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[34px]">
                    {cat.name}
                  </h2>
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-muted">
                    {cat.blurb}
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-[14px] text-ink/85 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-line/60 pb-3">
                      <span aria-hidden className="text-line">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream-50">
        <div className="mx-auto max-w-page px-6 py-14 text-center md:px-10">
          <h2 className="font-serif text-[24px] font-medium tracking-[-0.015em] text-ink md:text-[30px]">
            Don&apos;t see it here?
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
            The list isn&apos;t exhaustive. If it&apos;s admin and a human can do
            it remotely, ask. We&apos;ll either run it or tell you who should.
          </p>
          <Link
            href="mailto:hello@outpost.com.au"
            className="mt-6 inline-flex rounded-md border border-line bg-cream px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
          >
            Ask about a task →
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}
