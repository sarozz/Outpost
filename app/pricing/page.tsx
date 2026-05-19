import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three public tiers. From A$220/mo to A$1,440/mo. Hourly rate falls as you commit. No call required to sign up.",
};

const tiers = [
  {
    name: "Starter",
    price: "A$220",
    sub: "10 hrs · A$22/hr",
    blurb: "For solo operators getting started.",
    cta: "Start with Starter",
    popular: false,
    features: [
      "1 dedicated assistant (shared time)",
      "Weekly 15-min check-in",
      "Email + Slack handoff",
      "Same-day turnaround on simple tasks",
      "Cancel anytime, pro-rata refund",
    ],
  },
  {
    name: "Growth",
    price: "A$800",
    sub: "40 hrs · A$20/hr",
    blurb: "For teams ready to delegate weekly.",
    cta: "Choose Growth",
    popular: true,
    features: [
      "1 dedicated assistant (10 hrs/wk)",
      "Daily updates, weekly review call",
      "Portal, email, Slack, or phone handoff",
      "SOPs documented for recurring tasks",
      "Backup cover during agent leave",
      "Cancel anytime, pro-rata refund",
    ],
  },
  {
    name: "Scale",
    price: "A$1,440",
    sub: "80 hrs · A$18/hr",
    blurb: "For businesses with full-time admin needs.",
    cta: "Talk about Scale",
    popular: false,
    features: [
      "1 dedicated assistant (20 hrs/wk)",
      "Daily updates, weekly + monthly review",
      "Quarterly business reviews with AU lead",
      "Custom integrations (HubSpot, Xero, etc.)",
      "Priority queue & rapid escalation",
      "Backup cover + named secondary",
      "Cancel anytime, pro-rata refund",
    ],
  },
];

const comparisonRows = [
  { label: "Hours per month", values: ["10", "40", "80"] },
  { label: "Effective hourly rate", values: ["A$22", "A$20", "A$18"] },
  { label: "Dedicated assistant", values: ["Shared time", "10 hrs/wk", "20 hrs/wk"] },
  { label: "Updates", values: ["Weekly", "Daily", "Daily"] },
  { label: "Review cadence", values: ["—", "Weekly", "Weekly + monthly"] },
  { label: "Backup cover", values: ["—", "Yes", "Named secondary"] },
  { label: "Custom integrations", values: ["—", "Limited", "Yes"] },
  { label: "Phone handoff", values: ["Email only", "Yes", "Yes"] },
  { label: "AU account lead", values: ["—", "Shared", "Named"] },
];

const faqs = [
  {
    q: "What if I don't use all my hours?",
    a: "Hours roll over for one month. After that they expire — the price assumes you'll use them on something. You can always downgrade.",
  },
  {
    q: "Can I share my plan with my team?",
    a: "Yes. Anyone you authorise can hand work to your assistant. We track everything against your single plan.",
  },
  {
    q: "What happens if my assistant is sick?",
    a: "On Growth and Scale, a trained backup covers urgent work the same day. On Starter, we'll fill in the next business day.",
  },
  {
    q: "Is there a minimum term?",
    a: "No. Cancel anytime and we'll refund unused days pro-rata. We don't lock you in.",
  },
  {
    q: "Do you handle phone calls?",
    a: "Yes — on Growth and Scale. We provide an AU phone number that rings through to your assistant during business hours.",
  },
  {
    q: "How do you bill?",
    a: "Monthly in advance via card or BPAY. We invoice in AUD. GST applies for Australian customers.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple, public, no call required.</>}
        lede="Three tiers. The hourly rate drops as you commit. Cancel anytime — we don't lock you in."
      />

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={[
                  "relative flex flex-col rounded-xl p-6",
                  t.popular
                    ? "border-2 border-forest bg-cream-50 shadow-[0_24px_60px_-30px_rgba(22,58,45,0.35)] md:-my-2"
                    : "border border-line bg-cream-50",
                ].join(" ")}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-forest px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-50">
                    Most popular
                  </span>
                )}

                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {t.name}
                </div>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <div className="font-serif text-[44px] font-medium leading-none tracking-[-0.02em] text-ink">
                    {t.price}
                  </div>
                  <div className="text-[13px] text-ink-muted">/mo</div>
                </div>
                <div className="mt-2 text-[13px] text-ink-muted">{t.sub}</div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-ink-muted">
                  {t.blurb}
                </p>

                <ul className="mt-6 space-y-2.5 text-[13.5px] text-ink/85">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-forest" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={[
                    "mt-7 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[13px] font-medium transition-colors",
                    t.popular
                      ? "bg-forest text-cream-50 hover:bg-forest-dark"
                      : "border border-line bg-transparent text-ink hover:border-forest hover:text-forest",
                  ].join(" ")}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
          <div className="eyebrow mb-4">Compare</div>
          <h2 className="font-serif text-[28px] font-medium tracking-[-0.015em] text-ink md:text-[36px]">
            Side by side.
          </h2>

          <div className="mt-10 overflow-x-auto rounded-xl border border-line bg-cream-50">
            <table className="w-full min-w-[640px] text-left text-[14px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-6 py-4 font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-ink-muted">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className={[
                        "px-6 py-4 font-mono text-[10px] font-normal uppercase tracking-[0.18em]",
                        t.popular ? "text-forest" : "text-ink-muted",
                      ].join(" ")}
                    >
                      {t.name}
                      {t.popular && " · Popular"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-line/70 last:border-0">
                    <td className="px-6 py-4 text-ink-muted">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={[
                          "px-6 py-4",
                          tiers[i].popular ? "bg-forest/[0.04] text-ink" : "text-ink",
                        ].join(" ")}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
          <div className="eyebrow mb-4">Questions</div>
          <h2 className="font-serif text-[28px] font-medium tracking-[-0.015em] text-ink md:text-[36px]">
            Frequently asked.
          </h2>

          <div className="mt-10 divide-y divide-line/70 border-y border-line/70">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-[16px] font-medium text-ink">
                  {f.q}
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[64ch] text-[14.5px] leading-relaxed text-ink-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
