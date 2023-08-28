import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { ProfileMockWithAvatarUrl } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';

jest.mock('../../selectors/getProfileId/getProfileId', () => ({
  getProfileId: jest.fn(() => '1'),
}))

describe('updateProfileData tests', () => {
  test('update profile data success', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    asyncThunk.mockedAxios.put.mockResolvedValue(Promise.resolve({ data: ProfileMockWithAvatarUrl }))
    const result = await asyncThunk.callAction(ProfileMockWithAvatarUrl)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(ProfileMockWithAvatarUrl)
  })

  test('fetch profile data not success', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    asyncThunk.mockedAxios.put.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction(ProfileMockWithAvatarUrl)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ServerErrors.FAILED_TO_UPDATE_DATA])
  })

  test('fetch profile data not valid', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    const result = await asyncThunk.callAction({ ...ProfileMockWithAvatarUrl, first: '' })

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidationErrors.EMPTY_FIRSTNAME])
  })
})
