import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginUserSchema } from 'features/LoginUserModal';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { ProfileSchema } from 'entities/Profile';

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
