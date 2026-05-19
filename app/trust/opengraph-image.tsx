import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Outpost trust — compliance on the record";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Trust",
    title: "Compliance, on the record.",
    lede:
      "AWS Sydney hosting. Privacy Act-aligned. A$5M PI + Cyber. 30-day data deletion. Read the detail.",
  });
}
