import type { MotionCharacter } from "@/engine/motion";

/**
 * Velmoré motion character (OS Motion System §3). Ease is fixed sitewide; this
 * chooses the brand's tempo. "editorial" = the slowest, most considered pace —
 * quiet luxury, elegance through restraint. Declared once, used everywhere.
 */
export const MOTION_CHARACTER: MotionCharacter = "editorial";
