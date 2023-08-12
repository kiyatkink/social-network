import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { ProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

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

describe('getProfileData tests', () => {
  test('get profile data from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        data,
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileData(state as StoreSchema)).toEqual(data)
  })

  test('get data from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileData(state as StoreSchema)).toEqual(undefined)
  })
})
