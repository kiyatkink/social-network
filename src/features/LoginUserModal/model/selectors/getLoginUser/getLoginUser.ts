import { StoreSchema } from 'app/StoreProvider';
import { initialState } from '../../slice/LoginUserSlice';

export const getLoginUser = (state: StoreSchema) => state?.loginUser || initialState
