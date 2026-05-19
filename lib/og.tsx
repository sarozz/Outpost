import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontCache = new Map<string, Promise<ArrayBuffer>>();

function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const key = `${family}:${weight}`;
  let cached = fontCache.get(key);
  if (cached) return cached;

  cached = (async (): Promise<ArrayBuffer> => {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family
    )}:wght@${weight}&display=swap`;
    const cssRes = await fetch(cssUrl, {
      headers: {
        // Old UA so Google returns a single .ttf — Satori (the OG renderer)
        // accepts TTF/WOFF but not WOFF2.
        "User-Agent": "Mozilla/4.0",
      },
    });
    const css = await cssRes.text();
    const urls = Array.from(
      css.matchAll(/src:\s*url\((https:\/\/[^)]+\.(?:ttf|woff))\)/g),
      (m) => m[1]
    );
    const url = urls[urls.length - 1];
    if (!url) throw new Error(`Font URL not found in CSS: ${family} ${weight}`);
    const fontRes = await fetch(url);
    return await fontRes.arrayBuffer();
  })();

  fontCache.set(key, cached);
  return cached;
}

export async function renderOG({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  const [fraunces, inter, mono] = await Promise.all([
    loadFont("Fraunces", 500),
    loadFont("Inter", 400),
    loadFont("JetBrains Mono", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4EEDE",
          padding: "72px 88px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#171717",
          fontFamily: "Inter",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 40,
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            <span>Outpost</span>
            <span style={{ color: "#D6452F" }}>.</span>
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 14,
              letterSpacing: "0.22em",
              color: "#5E5E5E",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* center text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 80,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            {title}
          </div>
          {lede && (
            <div
              style={{
                marginTop: 28,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#5E5E5E",
                maxWidth: 920,
                display: "flex",
              }}
            >
              {lede}
            </div>
          )}
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #D9D2BD",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 16,
              color: "#171717",
              background: "#FAF6EC",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#D6452F",
                display: "block",
              }}
            />
            <span>Australian-managed · Offshore-delivered</span>
          </div>
          <div style={{ fontSize: 18, color: "#5E5E5E", display: "flex" }}>
            outpost.com.au
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 500, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
