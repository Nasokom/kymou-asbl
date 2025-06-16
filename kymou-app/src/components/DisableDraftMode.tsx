"use client";
import Link from "next/link";
import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    console.log(environment)
    return null;
  }

  return (
    <Link
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 rounded bg-gray-50 px-4 py-2 z-[1001]"
    >
      Desactiver le mode draft
    </Link>
  );
}