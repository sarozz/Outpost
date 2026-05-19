"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "outpost/15min";
const NAMESPACE = "15min";

export function BookEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#1F4D3C",
            "cal-text": "#171717",
            "cal-text-muted": "#5E5E5E",
            "cal-bg": "#FAF6EC",
            "cal-bg-muted": "#F4EEDE",
            "cal-border": "#D9D2BD",
            "cal-border-subtle": "#EBE3CF",
          },
          dark: {
            "cal-brand": "#1F4D3C",
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", minHeight: 720, overflow: "hidden" }}
      config={{ layout: "month_view" }}
    />
  );
}
