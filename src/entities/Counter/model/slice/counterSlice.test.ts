import { DeepPartial } from '@reduxjs/toolkit';
import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice test', () => {
  let store: DeepPartial<CounterSchema>;

  beforeEach(() => {
    store = { value: 10 }
  })

  test('increment', () => {
    expect(counterReducer(store as CounterSchema, counterActions.increment())).toStrictEqual({ value: 11 })
  })
  test('decrement', () => {
    expect(counterReducer(store as CounterSchema, counterActions.decrement())).toStrictEqual({ value: 9 })
  })
  test('check empty store', () => {
    expect(counterReducer(undefined, counterActions.increment())).toStrictEqual({ value: 1 })
  })
})
