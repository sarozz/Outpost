import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "How Outpost handles your data, who can see it, where it lives, and what happens when you leave. Privacy Act-aligned, AU-hosted, insured.",
};

const facts = [
  { label: "Data hosting", value: "AWS Sydney (ap-southeast-2)" },
  { label: "Privacy Act", value: "APP 1–13 aligned" },
  { label: "Insurance", value: "A$5M PI + Cyber" },
  { label: "Data deletion", value: "30 days post-exit" },
  { label: "Agreement", value: "MSA + signed NDA" },
  { label: "Background checks", value: "Identity + reference" },
];

const sections = [
  {
    id: "data",
    eyebrow: "01",
    title: "Where your data lives",
    body: (
      <>
        <p>
          Files, notes, and CRM exports stay in AWS Sydney (ap-southeast-2).
          We run a per-tenant S3 bucket with versioning and server-side
          encryption (AES-256). Access is gated through SSO and logged in
          CloudTrail.
        </p>
        <p>
          Email and calendar work happens inside your own Google / Microsoft
          tenant — your assistant is a named user with the scopes you grant.
          We never proxy your mail through our systems.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    eyebrow: "02",
    title: "Privacy Act alignment",
    body: (
      <>
        <p>
          We follow the Australian Privacy Principles (APP 1–13) as if we
          were a covered entity, even where the threshold doesn&apos;t apply.
          That means an open privacy policy, collection notices, access &
          correction rights, breach notification within 72 hours, and a
          named Privacy Officer you can email directly.
        </p>
        <p>
          For cross-border disclosures (APP 8), our agents in Nepal and
          India are bound by contractual privacy obligations equivalent to
          the APPs, with audit rights.
        </p>
      </>
    ),
  },
  {
    id: "people",
    eyebrow: "03",
    title: "Who can see your work",
    body: (
      <>
        <p>
          One assistant, named on your account. Their team lead and the
          Australian account manager have read access for QA and cover.
          That&apos;s it — no shared pool, no offshore reviewers you can&apos;t
          name.
        </p>
        <p>
          Every assistant signs an NDA at hire and a per-client confidentiality
          deed at onboarding. Background and reference checks happen before
          we issue credentials.
        </p>
      </>
    ),
  },
  {
    id: "security",
    eyebrow: "04",
    title: "Security practices",
    body: (
      <>
        <p>
          Hardware-bound work devices, MDM-enforced disk encryption, mandatory
          SSO with hardware-key MFA, no local data persistence. Password
          managers are required; shared logins are forbidden by policy and
          blocked technically where vendors support it.
        </p>
        <p>
          We audit access quarterly and rotate credentials on staff changes
          within 24 hours.
        </p>
      </>
    ),
  },
  {
    id: "insurance",
    eyebrow: "05",
    title: "Insurance",
    body: (
      <>
        <p>
          A$5M Professional Indemnity and A$5M Cyber Liability, underwritten
          by an APRA-regulated insurer. Certificates of currency are
          available on request — email{" "}
          <Link
            href="mailto:trust@outpost.com.au"
            className="underline decoration-1 underline-offset-[4px] hover:text-forest"
          >
            trust@outpost.com.au
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "exit",
    eyebrow: "06",
    title: "Leaving cleanly",
    body: (
      <>
        <p>
          Cancel anytime from the customer portal. We freeze your account on
          the cancellation date, hand back any files we hold, and delete all
          tenant data within 30 days — backups included.
        </p>
        <p>
          On request we&apos;ll provide a written deletion certificate signed by
          our Privacy Officer.
        </p>
      </>
    ),
  },
];

export default function TrustPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trust"
        title={<>Compliance, on the record.</>}
        lede="What you sign up to, in plain English. Where your data sits, who can see it, and what happens if you leave."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="mailto:trust@outpost.com.au"
            className="rounded-md bg-forest px-5 py-3 text-[14px] font-medium text-cream-50 transition-colors hover:bg-forest-dark"
          >
            Request DPA & insurance →
          </Link>
          <Link
            href="/legal/privacy"
            className="text-[14px] font-medium text-ink underline decoration-1 underline-offset-[6px] hover:text-forest"
          >
            Privacy policy
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-14 md:px-10 md:py-16">
          <div className="overflow-hidden rounded-xl border border-line bg-cream-50">
            <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="p-6 md:p-7">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-2 text-[15px] text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-14 md:space-y-20">
            {sections.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="grid scroll-mt-24 grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-16"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    {s.eyebrow}
                  </div>
                  <h2 className="mt-3 font-serif text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[34px]">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-ink/85 md:text-[16px]">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
