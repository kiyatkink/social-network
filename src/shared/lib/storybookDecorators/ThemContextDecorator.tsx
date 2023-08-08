import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeProvider } from '../theme';

export function ThemeContextDecorator(StoryComponent: StoryFn) {
  return (
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  )
}
