import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api'
import { useDispatch } from 'react-redux';
import { ReducerManager, StoreSchema, StoreWithReducerManager } from '../types/StoreSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialStore?: StoreSchema) {
  const isDev = process.env.MODE === 'development'

  const staticReducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager: ReducerManager = createReducerManager(staticReducers)

  const store: StoreWithReducerManager = configureStore({
    reducer: reducerManager.reduce,
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
