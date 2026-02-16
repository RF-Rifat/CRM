'use server';

import { Dictionary } from './dictionaries/types';

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then(m => m.default),
  fr: () => import('./dictionaries/fr.json').then(m => m.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
