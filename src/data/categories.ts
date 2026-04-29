import type { Category } from '../types';

export interface CategoryMeta {
  id: Category;
  label: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'structure',   label: 'Structure' },
  { id: 'multimedia',  label: 'Multimedia' },
  { id: 'text',        label: 'Text & Headings' },
  { id: 'semantic',    label: 'Semantic' },
  { id: 'interactive', label: 'Interactive' },
  { id: 'misc',        label: 'Misc' },
];
