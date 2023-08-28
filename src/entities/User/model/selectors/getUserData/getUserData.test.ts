import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { UserMock } from 'entities/User/mocks/data';
import { getUserData } from './getUserData';

describe('getUserData tests', () => {
  test('get user data success', () => {
    const store: DeepPartial<StoreSchema> = {
      user: {
        authData: UserMock,
      },
    }
    expect(getUserData(store as StoreSchema)).toEqual(UserMock)
  })

  test('get user data empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getUserData(store as StoreSchema)).toEqual(undefined)
  })
})
