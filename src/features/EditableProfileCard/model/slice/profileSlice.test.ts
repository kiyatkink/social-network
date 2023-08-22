import { DeepPartial } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema, ServerErrors } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Omsk',
    username: 'admin',
    avatar: 'static/media/src/shared/assets/tests/storybook.jpg',
  },
  isLoading: false,
  readonly: true,
  form: {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Omsk',
    username: 'admin',
    avatar: 'static/media/src/shared/assets/tests/storybook.jpg',
  },
}

describe('profileSlice tests', () => {
  test('changeForm action', () => {
    const store: DeepPartial<ProfileSchema> = initialState
    expect(profileReducer(store as ProfileSchema, profileActions.changeForm({ city: 'Moscow' }))).toEqual({ ...initialState, form: { ...initialState.form, city: 'Moscow' }, errors: undefined })
  })

  test('deleteProfileData action', () => {
    const store: DeepPartial<ProfileSchema> = initialState
    expect(profileReducer(store as ProfileSchema, profileActions.deleteProfileData)).toEqual({ ...initialState, data: undefined })
  })

  test('changeReadonly action', () => {
    const store: DeepPartial<ProfileSchema> = initialState
    expect(profileReducer(store as ProfileSchema, profileActions.changeReadonly(false))).toEqual({ ...initialState, readonly: false })
  })

  test('fetchProfileData.pending action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: false,
      readonly: true,
      errors: [],
    }
    expect(profileReducer(store as ProfileSchema, fetchProfileData.pending)).toEqual({ ...store, isLoading: true, errors: undefined })
  })

  test('fetchProfileData.fulfilled action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(store as ProfileSchema, fetchProfileData.fulfilled({}, '', ''))).toEqual({ isLoading: false, data: {}, form: {} })
  })

  test('fetchProfileData.rejected action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(store as ProfileSchema, fetchProfileData.rejected(new Error(), '', '', [ServerErrors.FAILED_TO_GET_DATA]))).toEqual({ isLoading: false, errors: [ServerErrors.FAILED_TO_GET_DATA] })
  })

  test('updateProfileData.pending action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: false,
      readonly: true,
      errors: [],
    }
    expect(profileReducer(store as ProfileSchema, updateProfileData.pending)).toEqual({ ...store, isLoading: true, errors: undefined })
  })

  test('updateProfileData.fulfilled action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: true,
    }
    expect(profileReducer(store as ProfileSchema, updateProfileData.fulfilled({}, '', {}))).toEqual({
      ...store, isLoading: false, data: {}, form: {},
    })
  })

  test('updateProfileData.rejected action', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: true,
    }
    expect(profileReducer(store as ProfileSchema, updateProfileData.rejected(new Error(), '', {}, [ServerErrors.FAILED_TO_UPDATE_DATA]))).toEqual({ ...store, isLoading: false, errors: [ServerErrors.FAILED_TO_UPDATE_DATA] })
  })
})
