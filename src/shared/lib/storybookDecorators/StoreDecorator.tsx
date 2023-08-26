import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss'
import { StoreProvider, StoreSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export function StoreDecorator(
  initialStore?: DeepPartial<StoreSchema>,
  asyncReducers?: Partial<Record<keyof StoreSchema, Reducer>>,
) {
  return function (StoryComponent: StoryFn) {
    return (
      <StoreProvider initialStore={initialStore} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );
  }
}
