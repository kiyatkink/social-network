import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { StoreSchema, StoreSchemaKeys } from '../types/StoreSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>) {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers<StoreSchema>(reducers)

  let keysToRemove: Array<StoreSchemaKeys> = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        // eslint-disable-next-line no-param-reassign
        state = { ...state }
        keysToRemove.forEach((key) => { delete state[key] })
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: (key: StoreSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StoreSchemaKeys) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
