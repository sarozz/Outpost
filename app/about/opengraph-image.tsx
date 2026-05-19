import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Outpost — Australian-managed offshore admin";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "About",
    title: "Australian-managed. Delivered by people we know.",
    lede:
      "A small team in Perth, Kathmandu, and Bengaluru building the option that was missing.",
  });
}
