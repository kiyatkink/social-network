import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getLoginUser } from './getLoginUser';
import { initialState } from '../../slice/LoginUserSlice';

describe('getLoginUser tests', () => {
  test('get login user from state', () => {
    const state: DeepPartial<StoreSchema> = {
      loginUser: initialState,
    }
    expect(getLoginUser(state as StoreSchema)).toEqual(initialState)
  })

  test('get login user from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getLoginUser(state as StoreSchema)).toEqual(initialState)
  })
})
