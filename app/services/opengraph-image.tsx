import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Outpost services — the full catalogue";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Services",
    title: "The full catalogue.",
    lede:
      "Six categories. 80+ tasks. One person who learns your business and runs them end-to-end.",
  });
}
