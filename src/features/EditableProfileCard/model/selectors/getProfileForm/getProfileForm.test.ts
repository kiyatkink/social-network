import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { ProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

const form: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar: '',
}

describe('getProfileForm tests', () => {
  test('get profile form from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        form,
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileForm(state as StoreSchema)).toEqual(form)
  })

  test('get form from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileForm(state as StoreSchema)).toEqual(undefined)
  })
})
