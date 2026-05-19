import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Outpost — your dedicated assistant, from $22/hr";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Outpost",
    title: "Your dedicated assistant, from $22/hr.",
    lede:
      "Managed from Australia. Delivered by trained agents in Nepal and India. One person assigned to you — not a pool, not a queue.",
  });
}
