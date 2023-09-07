import { StoreSchema } from 'app/StoreProvider';
import { initialState } from '../../slice/articleFiltersSlice/articleFiltersSlice';

export const getArticleFiltersSort = (store: StoreSchema) => store.articleFilters?.sort ?? ''
export const getArticleFiltersOrder = (store: StoreSchema) => store.articleFilters?.order ?? ''
export const getArticleFiltersSearch = (store: StoreSchema) => store.articleFilters?.search ?? ''
export const getArticleFiltersType = (store: StoreSchema) => store.articleFilters?.type ?? ''
export const getArticleFilters = (store: StoreSchema) => store.articleFilters ?? initialState
