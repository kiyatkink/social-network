import { ProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validationForm } from './validationForm';
import { ValidationErrors } from '../../types/ProfileSchema';

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

describe('validationForm tests', () => {
  test('If firstname is empty', () => {
    const formData: ProfileData = { ...data, first: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_FIRSTNAME])
  })

  test('If lastname is empty', async () => {
    const formData: ProfileData = { ...data, lastname: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_LASTNAME])
  })

  test('If age is not integer', async () => {
    const formData: ProfileData = { ...data, age: 12.5 }
    expect(validationForm(formData)).toEqual([ValidationErrors.AGE_SHOULD_BE_INTEGER])
  })

  test('If age is zero', async () => {
    const formData: ProfileData = { ...data, age: 0 }
    expect(validationForm(formData)).toEqual([ValidationErrors.AGE_SHOULD_BE_MORE_THAN_ZERO])
  })

  test('If city is empty', async () => {
    const formData: ProfileData = { ...data, city: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_CITY])
  })

  test('If username is empty', async () => {
    const formData: ProfileData = { ...data, username: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_USERNAME])
  })

  test('If avatar is not url', async () => {
    const formData: ProfileData = { ...data, avatar: 'abc' }
    expect(validationForm(formData)).toEqual([ValidationErrors.AVATAR_SHOULD_BE_URL])
  })
})
