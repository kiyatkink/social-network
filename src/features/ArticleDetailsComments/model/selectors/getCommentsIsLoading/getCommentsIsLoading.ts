import { StoreSchema } from 'app/StoreProvider';

export const getCommentsIsLoading = (store: StoreSchema) => store.comments?.isLoading || false
