import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Book a 15-min call with Outpost";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Book",
    title: "Pick a fifteen-minute slot.",
    lede:
      "No deck, no pitch. Straight answers on pricing and fit — and if it's a match, your assistant inside 48 hours.",
  });
}
