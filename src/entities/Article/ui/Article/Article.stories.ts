import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { Article } from './Article';
import { ArticleMock } from '../../mocks/data';

const pathRegex = /\/article\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(200, ArticleMock);
};

const meta: Meta<typeof Article> = {
  title: 'entities/Article',
  component: Article,
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
  parameters: {
    loki: { skip: true },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
};
