import { StoreSchema } from 'app/StoreProvider';

export const getCommentsError = (store: StoreSchema) => store?.comments?.error
export const getCommentsIsLoading = (store: StoreSchema) => store.comments?.isLoading || false
