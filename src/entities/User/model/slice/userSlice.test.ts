import { DeepPartial } from '@reduxjs/toolkit';
import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/UserSchema';

describe('userSlice tests', () => {
  test('setUser action', () => {
    const store: DeepPartial<UserSchema> = {}
    expect(userReducer(store, userActions.setUser({ id: '1', username: 'username' }))).toEqual({ authData: { id: '1', username: 'username' } })
  })

  test('deleteUser action', () => {
    const store: DeepPartial<UserSchema> = {
      authData: {
        id: '1',
        username: 'username',
      },
    }
    expect(userReducer(store, userActions.deleteUser())).toEqual({})
  })
})
