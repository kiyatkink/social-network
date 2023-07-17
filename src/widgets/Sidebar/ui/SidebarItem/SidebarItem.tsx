import { FC, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkSizes, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from '../../../../shared/config/routerConfig/routerConfig';
import cls from './SidebarItem.module.scss'

export interface SidebarItemProps {
    className?: string
    path: RoutesPath,
    theme?: AppLinkTheme,
    label: string,
    Icon?: VFC<SVGProps<SVGSVGElement>>,
    collapsed?: boolean,
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const {
    className,
    path,
    theme,
    label,
    Icon,
    collapsed,
  } = props
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(cls.SidebarItem, {}, [className])}
      to={path}
      theme={theme}
      size={AppLinkSizes.M}
    >
      <Icon className={cls.IconSize} />
      { collapsed ? '' : t(`${label}`)}
    </AppLink>
  );
};
