import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { ThemSwitcher } from 'features/ThemSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <SidebarItemsList collapsed={collapsed} />
      <div className={cls.footer}>
        <ThemSwitcher className={cls.ThemSwitcher_size} />
        <LanguageSwitcher collapsed={collapsed} />
      </div>
      <AppButton
        className={cls.TogglePosition}
        onClick={toggleCollapsed}
        theme={AppButtonThems.INVERTED}
        size={AppButtonSizes.L}
        square
      >
        { collapsed ? '>' : '<' }
      </AppButton>
    </div>
  );
};
