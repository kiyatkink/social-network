import { StoryFn, StoryContext } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeProvider } from 'shared/lib/theme';

export function ThemeContextDecorator(StoryComponent: StoryFn, context: StoryContext) {
  return (
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  )
}
