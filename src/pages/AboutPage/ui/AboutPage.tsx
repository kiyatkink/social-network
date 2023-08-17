import { useTranslation } from 'react-i18next';
import { memo } from 'react';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <div data-testid="about-page">
      {t('О сайте')}
    </div>
  );
}

export default memo(AboutPage);
