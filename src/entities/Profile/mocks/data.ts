import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileData } from '../model/types/profile';
import { Currency } from '../../Currency';
import { Country } from '../../Country';

export const ProfileMock: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar,
}

export const ProfileMockWithAvatarUrl: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
}
