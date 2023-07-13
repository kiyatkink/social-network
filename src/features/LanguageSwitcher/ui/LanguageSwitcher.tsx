import { FC } from 'react';
import { AppButton, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss'

export enum LangSwitcherThems {
  INVERTED_PRIMARY = 'inverted_primary'
}
interface LanguageSwitcherProps {
    className?: string
    theme?: LangSwitcherThems
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className, theme } = props;

  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      theme={AppButtonThems.CLEAR}
      onClick={toggleLanguage}
      className={classNames('LanguageSwitcher', {}, [className, cls[theme]])}
    >
      {t('Язык')}
    </AppButton>
  );
};
