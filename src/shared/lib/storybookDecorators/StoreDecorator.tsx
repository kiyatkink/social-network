import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss'
import { StoreProvider, StoreSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export function StoreDecorator(initialStore?: DeepPartial<StoreSchema>) {
  return function (StoryComponent: StoryFn) {
    return (
      <StoreProvider initialStore={initialStore}>
        <StoryComponent />
      </StoreProvider>
    );
  }
}
