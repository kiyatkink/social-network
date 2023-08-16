import { FC, memo, useCallback } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { sidebarItemListConfig, SidebarItemPropsAndParams } from '../../config/sidebarItemListConfig';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarItemsListProps {
    collapsed: boolean
}
export const SidebarItemsList: FC<SidebarItemsListProps> = memo((props: SidebarItemsListProps) => {
  const { collapsed } = props
  const isAuth = Boolean(useSelector(getUserData))

  const renderItem = useCallback((value: SidebarItemPropsAndParams) => {
    const { path, label, Icon } = value

    return (
      <SidebarItem
        path={path}
        theme={AppLinkTheme.INVERTED_PRIMARY}
        label={label}
        Icon={Icon}
        collapsed={collapsed}
        key={path}
      />
    )
  }, [collapsed])

  return (
    <>
      {Object.entries(sidebarItemListConfig).map(([key, value]) => {
        if (value.onlyAuth && !isAuth) {
          return null
        }
        return renderItem(value)
      })}
    </>
  )
});
