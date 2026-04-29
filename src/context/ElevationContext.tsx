import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { CATEGORY_ORDER, type Category, type ElevationMode, type Tag } from '../types';

interface ElevationState {
  mode: ElevationMode;
  setMode: Dispatch<SetStateAction<ElevationMode>>;

  hoveredCardId: string | null;
  setHoveredCardId: Dispatch<SetStateAction<string | null>>;

  openTag: Tag | null;
  setOpenTag: Dispatch<SetStateAction<Tag | null>>;

  activeCategories: Set<Category>;
  setActiveCategories: Dispatch<SetStateAction<Set<Category>>>;
}

const ElevationContext = createContext<ElevationState | null>(null);

export function ElevationProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ElevationMode>('blur');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [openTag, setOpenTag] = useState<Tag | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(
    () => new Set(CATEGORY_ORDER),
  );

  const value = useMemo<ElevationState>(
    () => ({
      mode,
      setMode,
      hoveredCardId,
      setHoveredCardId,
      openTag,
      setOpenTag,
      activeCategories,
      setActiveCategories,
    }),
    [mode, hoveredCardId, openTag, activeCategories],
  );

  return <ElevationContext.Provider value={value}>{children}</ElevationContext.Provider>;
}

export function useElevation(): ElevationState {
  const ctx = useContext(ElevationContext);
  if (!ctx) {
    throw new Error('useElevation must be used inside <ElevationProvider>');
  }
  return ctx;
}
