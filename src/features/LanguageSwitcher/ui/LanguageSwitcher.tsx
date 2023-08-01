import { FC, memo } from 'react';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
    className?: string
    collapsed?: boolean
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo((props: LanguageSwitcherProps) => {
  const { className, collapsed } = props;

  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      theme={AppButtonThems.INVERTED}
      onClick={toggleLanguage}
      size={AppButtonSizes.L}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
    >
      { collapsed ? t('Короткий язык') : t('Язык')}
    </AppButton>
  );
});
