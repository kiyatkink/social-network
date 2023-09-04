import { StoreSchema } from 'app/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getPagesScroll = (store: StoreSchema) => store.page.scroll

export const getPageScrollValue = createSelector([
  getPagesScroll,
  (store: StoreSchema, path: string) => path,
], (scrolls, path) => scrolls[path])
