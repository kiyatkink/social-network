import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { ProfileMock } from 'entities/Profile';
import { fetchProfileData } from './fetchProfileData';
import { ServerErrors } from '../../types/ProfileSchema';

describe('fetchProfileData tests', () => {
  test('fetch profile data success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchProfileData)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ data: ProfileMock }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(ProfileMock)
  })

  test('fetch profile data not success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchProfileData)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ServerErrors.FAILED_TO_GET_DATA])
  })
})
