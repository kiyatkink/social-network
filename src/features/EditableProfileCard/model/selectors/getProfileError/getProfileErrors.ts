import { StoreSchema } from 'app/StoreProvider';

export const getProfileErrors = (store: StoreSchema) => store?.profile?.errors
