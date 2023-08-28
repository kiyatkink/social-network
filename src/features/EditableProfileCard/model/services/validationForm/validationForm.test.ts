import { ProfileData, ProfileMockWithAvatarUrl } from 'entities/Profile';
import { validationForm } from './validationForm';
import { ValidationErrors } from '../../types/ProfileSchema';

describe('validationForm tests', () => {
  test('If firstname is empty', () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, first: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_FIRSTNAME])
  })

  test('If lastname is empty', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, lastname: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_LASTNAME])
  })

  test('If age is not integer', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, age: 12.5 }
    expect(validationForm(formData)).toEqual([ValidationErrors.AGE_SHOULD_BE_INTEGER])
  })

  test('If age is zero', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, age: 0 }
    expect(validationForm(formData)).toEqual([ValidationErrors.AGE_SHOULD_BE_MORE_THAN_ZERO])
  })

  test('If city is empty', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, city: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_CITY])
  })

  test('If username is empty', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, username: '' }
    expect(validationForm(formData)).toEqual([ValidationErrors.EMPTY_USERNAME])
  })

  test('If avatar is not url', async () => {
    const formData: ProfileData = { ...ProfileMockWithAvatarUrl, avatar: 'abc' }
    expect(validationForm(formData)).toEqual([ValidationErrors.AVATAR_SHOULD_BE_URL])
  })
})
