import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { ThemSwitcher } from 'features/ThemSwitcher';
import { LanguageSwitcher, LangSwitcherThems } from 'features/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <AppButton onClick={toggleCollapsed}>{t('Тогл')}</AppButton>
      <div className={cls.footer}>
        <ThemSwitcher className={cls.ThemSwitcher_size} />
        <LanguageSwitcher theme={LangSwitcherThems.INVERTED_PRIMARY} />
      </div>
    </div>
  );
};
