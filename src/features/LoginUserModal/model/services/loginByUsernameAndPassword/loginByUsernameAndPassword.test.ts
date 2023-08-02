import { userActions } from 'entities/User';
import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { loginByUsernameAndPassword } from './loginByUsernameAndPassword';

describe('loginByUsernameAndPassword tests', () => {
  test('username and password success', async () => {
    const userValue = {
      'id': '1',
      'username': 'admin',
    }

    const asyncThunk = new ThunkActionCreator(loginByUsernameAndPassword)
    asyncThunk.mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }))
    const result = await asyncThunk.callAction({ username: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3)
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userValue))
    expect(result.payload).toEqual(userValue)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('username and password not valid', async () => {
    const asyncThunk = new ThunkActionCreator(loginByUsernameAndPassword)
    asyncThunk.mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction({ username: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.payload).toEqual('error')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
