import { StoreSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('getCounter test', () => {
  test('Get store.counter', () => {
    const store: DeepPartial<StoreSchema> = { counter: { value: 10 } }
    expect(getCounter(store as StoreSchema)).toStrictEqual({ value: 10 })
  })
})
