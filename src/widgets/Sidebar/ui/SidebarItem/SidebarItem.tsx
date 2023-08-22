import {
  FC, memo, SVGProps, VFC,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkSizes, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from 'shared/config/routerConfig/routerConfig';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './SidebarItem.module.scss'

export interface SidebarItemProps {
    className?: string
    path: RoutesPath,
    theme?: AppLinkTheme,
    label: string,
    Svg: VFC<SVGProps<SVGSVGElement>>,
    collapsed?: boolean,
}

export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const {
    className,
    path,
    theme,
    label,
    Svg,
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
      <Icon Svg={Svg} width="30px" height="30px" />
      { collapsed ? '' : t(`${label}`)}
    </AppLink>
  );
});
