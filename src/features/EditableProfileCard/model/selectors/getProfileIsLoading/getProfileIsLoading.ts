import { StoreSchema } from 'app/StoreProvider';

export const getProfileIsLoading = (store: StoreSchema) => store?.profile?.isLoading || false
