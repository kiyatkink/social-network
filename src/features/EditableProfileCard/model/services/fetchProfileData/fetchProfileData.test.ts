import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { ProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';
import { ServerErrors } from '../../types/ProfileSchema';

const data: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar: '',
}

describe('fetchProfileData tests', () => {
  test('fetch profile data success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchProfileData)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('fetch profile data not success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchProfileData)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ServerErrors.FAILED_TO_GET_DATA])
  })
})
