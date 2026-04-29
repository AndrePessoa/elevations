import { useElevation } from '../context/ElevationContext';
import type { ElevationMode } from '../types';

const MODES: { id: ElevationMode; label: string; hint: string }[] = [
  { id: 'blur',   label: 'Blur',   hint: 'Lower layers blur, accumulating per level' },
  { id: 'color',  label: 'Color',  hint: 'Lower layers desaturate, accumulating' },
  { id: 'shadow', label: 'Shadow', hint: 'Translucent overlay between layers' },
];

export function ModeSelector() {
  const { mode, setMode } = useElevation();

  return (
    <div className="mode-selector" role="radiogroup" aria-label="Elevation mode">
      {MODES.map((m) => (
        <button
          key={m.id}
          type="button"
          role="radio"
          aria-checked={mode === m.id}
          title={m.hint}
          className="mode-selector-option"
          data-active={mode === m.id ? 'true' : undefined}
          onClick={() => setMode(m.id)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
