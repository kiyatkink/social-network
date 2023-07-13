import { StoryFn, StoryContext } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export function routerDecorator(StoryComponent: StoryFn) {
  return (
    <MemoryRouter initialEntries={['/']}>
      <StoryComponent />
    </MemoryRouter>
  )
}
