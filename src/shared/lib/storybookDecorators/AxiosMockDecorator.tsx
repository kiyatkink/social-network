import { StoryFn } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { AxiosMock } from '../tests/AxiosMock';

type Mock = (adapter: MockAdapter) => void
export function AxiosMockDecorator(mock: Mock, api: AxiosInstance) {
  return function (StoryComponent: StoryFn) {
    return (
      <AxiosMock mock={mock} api={api}>
        <StoryComponent />
      </AxiosMock>
    );
  }
}
