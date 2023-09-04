import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api'
import { CombinedState, Reducer } from 'redux';
import { pageReducer } from 'widgets/Page';
import { ReducerManager, StoreSchema, StoreWithReducerManager } from '../types/StoreSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialStore?: StoreSchema,
  asyncReducers?: Partial<Record<keyof StoreSchema, Reducer>>,
) {
  const isDev = process.env.MODE === 'development'

  const staticReducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
    page: pageReducer,
    ...asyncReducers,
  }

  const reducerManager: ReducerManager = createReducerManager(staticReducers)

  const store: StoreWithReducerManager = configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<CombinedState<StoreSchema>>,
    devTools: isDev,
    preloadedState: initialStore,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
  })

  store.reducerManager = reducerManager

  return store
}
