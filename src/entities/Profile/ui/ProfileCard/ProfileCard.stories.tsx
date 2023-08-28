import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ProfileMock } from '../../mocks/data';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    loki: { skip: true },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    form: ProfileMock,
    readonly: false,
  },
};

export const Readonly: Story = {
  args: {
    form: ProfileMock,
    readonly: true,
  },
};
