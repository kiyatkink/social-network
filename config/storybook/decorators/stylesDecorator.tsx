import { StoryFn, StoryContext } from '@storybook/react';
import 'app/styles/index.scss'

export function stylesDecorator(StoryComponent: StoryFn, context: StoryContext) {
  const { theme } = context.globals || context.parameters
  return (
    <div className={`app ${theme}`} style={{ padding: '1rem' }}>
      <StoryComponent />
    </div>
  )
}
