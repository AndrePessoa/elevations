export type Category =
  | 'structure'
  | 'multimedia'
  | 'text'
  | 'semantic'
  | 'interactive'
  | 'misc';

export const CATEGORY_ORDER: Category[] = [
  'structure',
  'multimedia',
  'text',
  'semantic',
  'interactive',
  'misc',
];

export type ElevationMode = 'blur' | 'color' | 'shadow';
export type ElevationLevel = 'card' | 'popover' | 'dialog';

export interface Tag {
  name: string;
  displayName: string;
  category: Category;
  type: string;
  usage: string;
  description: string;
  w3cUrl: string;
  mdnUrl: string;
}
