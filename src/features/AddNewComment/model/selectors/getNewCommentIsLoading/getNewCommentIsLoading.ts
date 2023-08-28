import { StoreSchema } from 'app/StoreProvider';

export const getNewCommentIsLoading = (store: StoreSchema) => store?.newComment?.isLoading || false
