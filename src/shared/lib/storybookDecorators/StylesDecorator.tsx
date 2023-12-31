import { StoryFn, StoryContext } from '@storybook/react';
import 'app/styles/index.scss'
import { useContext, useEffect } from 'react';
import { ThemeContext, Thems } from '../theme';

export function StylesDecorator(StoryComponent: StoryFn, context: StoryContext) {
  const { theme: storybookTheme } = context.globals || context.parameters
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTheme?.(storybookTheme === Thems.DARK ? Thems.DARK : Thems.LIGHT)
  }, [setTheme, storybookTheme])

  return (
    <div className="app" style={{ padding: '1rem' }}>
      <StoryComponent />
    </div>
  )
}
