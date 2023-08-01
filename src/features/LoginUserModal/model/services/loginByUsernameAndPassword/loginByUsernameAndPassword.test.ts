import axios from 'axios';
import { userActions } from 'entities/User';
import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { loginByUsernameAndPassword } from './loginByUsernameAndPassword';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsernameAndPassword tests', () => {
  test('username and password success', async () => {
    const userValue = {
      'id': '1',
      'username': 'admin',
    }
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }))
    const asyncThunk = new ThunkActionCreator(loginByUsernameAndPassword)
    const result = await asyncThunk.callAction({ username: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3)
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userValue))
    expect(result.payload).toEqual(userValue)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('username and password not valid', async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }))
    const asyncThunk = new ThunkActionCreator(loginByUsernameAndPassword)
    const result = await asyncThunk.callAction({ username: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.payload).toEqual('error')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
