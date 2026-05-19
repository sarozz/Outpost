import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Outpost — talk to a human";
export const contentType = ogContentType;
export const size = ogSize;

export default async function OG() {
  return renderOG({
    eyebrow: "Contact",
    title: "Talk to a human.",
    lede:
      "Hello, sales, trust, support — pick the inbox that fits. We reply inside a working day.",
  });
}
