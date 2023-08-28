import { StoreSchema } from 'app/StoreProvider';

export const getNewCommentText = (store: StoreSchema) => store?.newComment?.text || ''
