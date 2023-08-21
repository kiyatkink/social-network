import { StoreSchema } from 'app/StoreProvider';

export const getProfileId = (store: StoreSchema) => store?.user?.authData?.profileId
