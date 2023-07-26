import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StoreSchema } from '../types/StoreSchema';

export function createReduxStore(initialStore?: StoreSchema) {
  const isDev = process.env.MODE === 'development'
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: isDev,
    preloadedState: initialStore,
  })
}
