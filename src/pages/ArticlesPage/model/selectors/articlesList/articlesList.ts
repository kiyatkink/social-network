import { StoreSchema } from 'app/StoreProvider';
import { ArticlesView } from 'entities/Article';

export const getArticlesListView = (store: StoreSchema) => store?.articlesList?.view || ArticlesView.LIST

export const getArticlesListError = (store: StoreSchema) => store?.articlesList?.error || ''

export const getArticlesListIsLoading = (store: StoreSchema) => store?.articlesList?.isLoading || false
