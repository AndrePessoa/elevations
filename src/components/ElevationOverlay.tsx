import { useElevation } from '../context/ElevationContext';

/**
 * Two translucent black layers used only when mode === 'shadow'.
 * Z-index sandwich:
 *   inactive card (1) | overlay-A (5) | active card (6) | popover (10) | overlay-B (15) | modal (100).
 * Active card sits above overlay-A so it's exempt from the popover-level
 * darken — same principle as filter: none in blur/color modes.
 */
export function ElevationOverlay() {
  const { mode, hoveredCardId, openTag } = useElevation();

  if (mode !== 'shadow') return null;

  const aVisible = Boolean(hoveredCardId || openTag);
  const bVisible = Boolean(openTag);

  return (
    <>
      <div
        className="elevation-overlay elevation-overlay-a"
        data-visible={aVisible ? 'true' : undefined}
        aria-hidden
      />
      <div
        className="elevation-overlay elevation-overlay-b"
        data-visible={bVisible ? 'true' : undefined}
        aria-hidden
      />
    </>
  );
}
