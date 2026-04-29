import { useElevation } from '../context/ElevationContext';
import { CATEGORY_ORDER, type Category } from '../types';

const LABELS: Record<Category, string> = {
  structure: 'Structure',
  multimedia: 'Multimedia',
  text: 'Text',
  semantic: 'Semantic',
  interactive: 'Interactive',
  misc: 'Misc',
};

export function CategoryFilter() {
  const { activeCategories, setActiveCategories } = useElevation();

  const toggle = (id: Category) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div
      className="category-filter"
      role="group"
      aria-label="Filter by category"
    >
      {CATEGORY_ORDER.map((id) => {
        const active = activeCategories.has(id);
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            className="category-filter-option"
            data-cat={id}
            data-active={active ? 'true' : undefined}
            onClick={() => toggle(id)}
          >
            {LABELS[id]}
          </button>
        );
      })}
    </div>
  );
}
