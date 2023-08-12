import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { ProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';

const data: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar: 'static/media/src/shared/assets/tests/storybook.jpg',
}

describe('updateProfileData tests', () => {
  test('update profile data success', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    asyncThunk.mockedAxios.put.mockResolvedValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction(data)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('fetch profile data not success', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    asyncThunk.mockedAxios.put.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction(data)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ServerErrors.FAILED_TO_UPDATE_DATA])
  })

  test('fetch profile data not valid', async () => {
    const asyncThunk = new ThunkActionCreator(updateProfileData)
    const result = await asyncThunk.callAction({ ...data, first: '' })

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidationErrors.EMPTY_FIRSTNAME])
  })
})
