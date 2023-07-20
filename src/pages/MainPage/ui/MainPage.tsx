import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <div data-testid="main-page">
      {t('Главная страница')}
      <Counter />
    </div>
  );
}

export default MainPage;
