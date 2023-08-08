import { StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export function RouterDecorator(StoryComponent: StoryFn) {
  return (
    <MemoryRouter initialEntries={['/']}>
      <StoryComponent />
    </MemoryRouter>
  )
}
