"use client";

/**
 * Project Reveal — the OS `Reveal` with Velmoré's motion character (`editorial`)
 * applied by default, so section reveals share one tempo without threading the
 * character through every call. Callers can still override per-instance. Use
 * this everywhere instead of importing `Reveal` from the engine directly.
 * `heroStack` (a pure helper, used in server components) is imported from the
 * engine directly with `MOTION_CHARACTER`.
 */
import { Reveal as EngineReveal, type RevealProps } from "@/engine/motion";
import { MOTION_CHARACTER } from "@/config/motion";

export function Reveal(props: RevealProps) {
  return <EngineReveal character={MOTION_CHARACTER} {...props} />;
}

export { Stagger } from "@/engine/motion";
