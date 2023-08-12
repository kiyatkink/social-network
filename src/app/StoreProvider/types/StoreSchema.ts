import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginUserSchema } from 'features/LoginUserModal';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { ProfileSchema } from 'features/EditableProfileCard';
import { AxiosInstance } from 'axios';

export interface StoreSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редюсеры
    loginUser?: LoginUserSchema
    profile?: ProfileSchema
}

export type StoreSchemaKeys = keyof StoreSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StoreSchema>,
    reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>,
    add: (key: StoreSchemaKeys, reducer: Reducer) => void,
    remove:(key: StoreSchemaKeys) => void,
}
export interface StoreWithReducerManager extends ToolkitStore<StoreSchema> {
    reducerManager?: ReducerManager
}

export interface ExtraType {
    api: AxiosInstance
}
export interface ThunkApiConfig<T> {
    rejectValue: T,
    extra: ExtraType
}
