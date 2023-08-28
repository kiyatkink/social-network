import { StoreSchema } from 'app/StoreProvider';

export const getNewCommentError = (store: StoreSchema) => store?.newComment?.error
