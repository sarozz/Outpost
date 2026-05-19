import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookEmbed } from "@/components/BookEmbed";

export const metadata: Metadata = {
  title: "Book a 15-min call — Outpost",
  description:
    "Pick a 15-minute slot. We'll answer your questions, talk through which tier fits, and — if it's a fit — match you to an assistant within 48 hours.",
};

const promises = [
  "No deck. No sales pitch.",
  "Straight answers on pricing and fit.",
  "If we're not right for you, we'll say so.",
];

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book"
        title={<>Pick a fifteen-minute slot.</>}
        lede="No deck, no sales pitch. We'll answer your questions, work out which tier fits, and — if it's a match — line up your assistant inside 48 hours."
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted">
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-forest" />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-page px-6 py-12 md:px-10 md:py-16">
          <div className="overflow-hidden rounded-xl border border-line bg-cream-50 p-2 md:p-4">
            <BookEmbed />
          </div>

          <p className="mt-6 text-center text-[13px] text-ink-muted">
            Prefer email? Write to{" "}
            <a
              href="mailto:hello@outpost.com.au"
              className="text-ink underline decoration-1 underline-offset-[4px] hover:text-forest"
            >
              hello@outpost.com.au
            </a>{" "}
            and we&apos;ll reply inside a working day.
          </p>
        </div>
      </section>
    </main>
  );
}
