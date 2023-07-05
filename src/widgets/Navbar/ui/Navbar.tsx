import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = (props) => {
  const { classesNames } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [classesNames])}>
      <div className={cls.LinkSection}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED_PRIMARY}>{t('Главная')}</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED_PRIMARY}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
