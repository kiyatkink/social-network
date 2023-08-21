import type { Meta, StoryObj } from '@storybook/react';
import EyeIcon from 'shared/assets/eye-icon.svg'
import CopyIcon from 'shared/assets/copy-code-icon.svg'
import { Icon, IconFill, IconStroke } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    Svg: EyeIcon,
  },
};

export const PrimaryFill: Story = {
  args: {
    Svg: EyeIcon,
    fill: IconFill.PRIMARY,
  },
};

export const Size20x20: Story = {
  args: {
    Svg: EyeIcon,
    height: '20px',
    width: '20px',
  },
};

export const PrimaryStroke: Story = {
  args: {
    Svg: CopyIcon,
    stroke: IconStroke.PRIMARY,
  },
};
