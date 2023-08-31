import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginUserSchema } from 'features/LoginUserModal';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { ProfileSchema } from 'features/EditableProfileCard';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { CommentsSchema, NewCommentSchema } from 'features/ArticleDetailsComments';
import { ArticlesListSchema } from 'pages/ArticlesPage';

export interface StoreSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редюсеры
    loginUser?: LoginUserSchema
    profile?: ProfileSchema
    article?: ArticleSchema
    comments?: CommentsSchema
    newComment?: NewCommentSchema
    articlesList?: ArticlesListSchema
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
