import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreSchemaKeys, StoreWithReducerManager } from 'app/StoreProvider/types/StoreSchema';
import { Reducer } from 'redux';

export function useAsyncReducer(key: StoreSchemaKeys, reducer: Reducer, notDeleteReducerAfterUnmount?: boolean) {
  const store: StoreWithReducerManager = useStore()
  const dispatch = useDispatch()

  useEffect(() => {
    store.reducerManager?.add(key, reducer)
    dispatch({ type: `@INIT ${key}` })

    if (notDeleteReducerAfterUnmount) {
      return;
    }
    return () => {
      store.reducerManager?.remove(key)
      dispatch({ type: `@DELETE ${key}` })
    }
  }, [dispatch, key, notDeleteReducerAfterUnmount, reducer, store.reducerManager]);
}
