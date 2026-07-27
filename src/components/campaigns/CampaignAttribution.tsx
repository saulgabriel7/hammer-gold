"use client";

import { useEffect } from "react";
import { captureAttribution, pushSiteEvent } from "@/lib/attribution";

interface CampaignAttributionProps {
  campaign: string;
  product: string;
  landingPath: string;
}

export function CampaignAttribution({
  campaign,
  product,
  landingPath,
}: CampaignAttributionProps) {
  useEffect(() => {
    const attribution = captureAttribution({
      campaign,
      product,
      from: "campaign-page",
      landing_path: landingPath,
    });

    pushSiteEvent("hammer_gold_campaign_view", attribution);
  }, [campaign, landingPath, product]);

  return null;
}
