import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <Page data-testid="about-page">
      {t('О сайте')}
    </Page>
  );
}

export default memo(AboutPage);
