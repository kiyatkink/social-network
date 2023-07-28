import { StoreSchema } from 'app/StoreProvider';

export const getUserData = (state: StoreSchema) => state?.user.authData
