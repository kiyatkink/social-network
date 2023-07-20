import { StoreSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue test', () => {
  test('Get store.counter', () => {
    const store: DeepPartial<StoreSchema> = { counter: { value: 10 } }
    expect(getCounterValue(store as StoreSchema)).toStrictEqual(10)
  })
})
