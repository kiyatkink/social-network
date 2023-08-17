import { StoreSchema } from 'app/StoreProvider';

export const getArticleData = (state: StoreSchema) => state?.article?.data
export const getArticleIsLoading = (state: StoreSchema) => state.article?.isLoading || false
export const getArticleError = (state: StoreSchema) => state?.article?.error
