import { FC, memo } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { sidebarItemListConfig } from '../../config/sidebarItemListConfig';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarItemsListProps {
    collapsed: boolean
}
export const SidebarItemsList: FC<SidebarItemsListProps> = memo((props: SidebarItemsListProps) => {
  const { collapsed } = props
  const isAuth = Boolean(useSelector(getUserData))
  return (
    <>
      {Object.entries(sidebarItemListConfig).map(([key, value]) => {
        const {
          path, label, Icon, onlyAuth,
        } = value

        if (onlyAuth && !isAuth) {
          return null
        }

        return (
          <SidebarItem
            path={path}
            theme={AppLinkTheme.INVERTED_PRIMARY}
            label={label}
            Icon={Icon}
            collapsed={collapsed}
            key={key}
          />
        )
      })}
    </>
  )
});
