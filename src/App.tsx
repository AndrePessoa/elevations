import { useEffect } from 'react';
import { ElevationProvider, useElevation } from './context/ElevationContext';
import { ModeSelector } from './components/ModeSelector';
import { CategoryFilter } from './components/CategoryFilter';
import { Grid } from './components/Grid';
import { DetailsModal } from './components/DetailsModal';
import { ElevationOverlay } from './components/ElevationOverlay';

function ElevationStateBinder() {
  const { mode, hoveredCardId, openTag } = useElevation();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.mode = mode;
    if (hoveredCardId) {
      root.dataset.popoverOpen = 'true';
    } else {
      delete root.dataset.popoverOpen;
    }
    if (openTag) {
      root.dataset.dialogOpen = 'true';
    } else {
      delete root.dataset.dialogOpen;
    }
  }, [mode, hoveredCardId, openTag]);

  return null;
}

function Shell() {
  return (
    <>
      <ElevationStateBinder />
      <div className="page">
        <header className="page-header">
          <div className="page-title">
            <span className="page-title-mark" aria-hidden>◐</span>
            <h1>Elevations</h1>
            <p className="page-subtitle">
              Hover a tag to peek; open <em>Details</em> to compound.
            </p>
          </div>
          <ModeSelector />
        </header>
        <main>
          <CategoryFilter />
          <Grid />
        </main>
      </div>
      <ElevationOverlay />
      <DetailsModal />
    </>
  );
}

export default function App() {
  return (
    <ElevationProvider>
      <Shell />
    </ElevationProvider>
  );
}
