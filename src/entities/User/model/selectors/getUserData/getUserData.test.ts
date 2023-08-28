import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getUserData } from './getUserData';

describe('getUserData tests', () => {
  test('get user data success', () => {
    const store: DeepPartial<StoreSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }
    expect(getUserData(store as StoreSchema)).toEqual({
      id: '1',
      username: 'username',
    })
  })

  test('get user data empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getUserData(store as StoreSchema)).toEqual(undefined)
  })
})
