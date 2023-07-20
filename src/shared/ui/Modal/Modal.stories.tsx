import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab accusantium cumque dolorum in iusto nam nemo nostrum odit officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti eius eligendi ex incidunt numquam quas temporibus vero vitae voluptatibus?',
  },
};
