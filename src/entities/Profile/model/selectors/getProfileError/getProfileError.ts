import { StoreSchema } from 'app/StoreProvider';

export const getProfileError = (store: StoreSchema) => store?.profile?.error
