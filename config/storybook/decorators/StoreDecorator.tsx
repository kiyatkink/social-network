import { StoryFn, StoryContext } from '@storybook/react';
import 'app/styles/index.scss'
import { StoreProvider, StoreSchema } from 'app/StoreProvider';

export function StoreDecorator(StoryComponent: StoryFn, context: StoryContext) {
  return (
    <StoreProvider>
      <StoryComponent />
    </StoreProvider>
  );
}
