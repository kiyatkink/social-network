import { DeepPartial } from '@reduxjs/toolkit';
import { initialState, LoginUserActions, LoginUserReducer } from './LoginUserSlice';
import { LoginUserSchema } from '../types/LoginUserSchema';

describe('LoginUserSlice tests', () => {
  test('test set username', () => {
    const store: DeepPartial<LoginUserSchema> = initialState
    expect(LoginUserReducer(store as LoginUserSchema, LoginUserActions.setUsername('123'))).toEqual({ ...initialState, username: '123' })
  })
  test('test set password', () => {
    const store: DeepPartial<LoginUserSchema> = initialState
    expect(LoginUserReducer(store as LoginUserSchema, LoginUserActions.setPassword('123'))).toEqual({ ...initialState, password: '123' })
  })
})
