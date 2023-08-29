import { StoreSchema } from 'app/StoreProvider';

export const getNewCommentError = (store: StoreSchema) => store?.newComment?.error
export const getNewCommentIsLoading = (store: StoreSchema) => store?.newComment?.isLoading || false
export const getNewCommentText = (store: StoreSchema) => store?.newComment?.text || ''
