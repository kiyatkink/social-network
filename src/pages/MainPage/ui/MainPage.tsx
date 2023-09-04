import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <Page data-testid="main-page">
      {t('Главная страница')}
      <Counter />
    </Page>
  );
}

export default memo(MainPage);
