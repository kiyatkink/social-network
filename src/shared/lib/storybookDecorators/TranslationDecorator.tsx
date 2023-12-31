import { StoryFn, StoryContext } from '@storybook/react';
import 'app/styles/index.scss'
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18n/i18next'

export function TranslationDecorator(StoryComponent: StoryFn, context: StoryContext) {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
}
