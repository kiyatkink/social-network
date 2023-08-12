import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpg'
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard, ProfileData } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

const form: ProfileData = {
  first: 'Кирилл',
  lastname: 'Кияткин',
  age: 23,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Omsk',
  username: 'admin',
  avatar,
}

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    form,
    readonly: false,
  },
};

export const Readonly: Story = {
  args: {
    form,
    readonly: true,
  },
};
