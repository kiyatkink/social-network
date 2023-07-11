import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <div data-testid="main-page">
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;
