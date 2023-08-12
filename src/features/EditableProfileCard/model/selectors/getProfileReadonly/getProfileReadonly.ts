import { StoreSchema } from 'app/StoreProvider';

export const getProfileReadonly = (store: StoreSchema) => store?.profile?.readonly || false
