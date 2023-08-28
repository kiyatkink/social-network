import { DeepPartial } from '@reduxjs/toolkit';
import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/UserSchema';
import { UserMock } from '../../mocks/data';

describe('userSlice tests', () => {
  test('setUser action', () => {
    const store: DeepPartial<UserSchema> = {}
    expect(userReducer(store, userActions.setUser(UserMock))).toEqual({ authData: UserMock })
  })

  test('deleteUser action', () => {
    const store: DeepPartial<UserSchema> = {
      authData: UserMock,
    }
    expect(userReducer(store, userActions.deleteUser())).toEqual({})
  })
})
