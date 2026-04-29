import { useElevation } from '../context/ElevationContext';

/**
 * Two fixed full-screen layers that drive every elevation mode:
 *   blur   → backdrop-filter: blur(...)
 *   color  → backdrop-filter: saturate(...)
 *   shadow → translucent background
 * Z-index sandwich:
 *   inactive card (1) | overlay-a (5) | active card (6) | popover (10) | overlay-b (15) | modal (100).
 * Anything below an overlay's z-index is affected by it; the active card and
 * popover sit above overlay-a so they stay sharp at the popover level.
 */
export function ElevationOverlay() {
  const { hoveredCardId, openTag } = useElevation();

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
