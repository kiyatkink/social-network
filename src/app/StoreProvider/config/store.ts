import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ReducerManager, StoreSchema, StoreWithReducerManager } from '../types/StoreSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialStore?: StoreSchema) {
  const isDev = process.env.MODE === 'development'

  const staticReducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager: ReducerManager = createReducerManager(staticReducers)

  const store: StoreWithReducerManager = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: isDev,
    preloadedState: initialStore,
  })

  store.reducerManager = reducerManager

  return store
}
