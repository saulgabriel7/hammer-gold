"use client";

import dynamic from "next/dynamic";

const HammerAssistant = dynamic(
  () =>
    import("@/components/assistant/HammerAssistant").then(
      (module) => module.HammerAssistant
    ),
  { ssr: false }
);

export function HammerAssistantLoader() {
  return <HammerAssistant />;
}
