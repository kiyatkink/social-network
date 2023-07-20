import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StoreSchema } from '../types/StoreSchema';

export function createReduxStore(initialStore?: StoreSchema) {
  const isDev = process.env.MODE === 'development'
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: isDev,
    preloadedState: initialStore,
  })
}
