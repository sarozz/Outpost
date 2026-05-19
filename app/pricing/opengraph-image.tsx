import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Outpost pricing — three public tiers";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Pricing",
    title: "Simple, public, no call required.",
    lede:
      "Three tiers — from A$220/mo to A$1,440/mo. Hourly rate drops as you commit. Cancel anytime.",
  });
}
