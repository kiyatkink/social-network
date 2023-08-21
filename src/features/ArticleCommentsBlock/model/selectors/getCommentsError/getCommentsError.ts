import { StoreSchema } from 'app/StoreProvider';

export const getCommentsError = (store: StoreSchema) => store.comments?.error
