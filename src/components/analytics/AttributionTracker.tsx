"use client";

import { useEffect } from "react";
import { captureAttribution, pushSiteEvent } from "@/lib/attribution";

export function AttributionTracker() {
  useEffect(() => {
    const attribution = captureAttribution();

    if (Object.keys(attribution).length > 0) {
      pushSiteEvent("hammer_gold_attribution_capture", attribution);
    }
  }, []);

  return null;
}
