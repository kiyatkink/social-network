import { FC, memo, useCallback } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { SidebarItem, SidebarItemProps } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarItemsListProps {
    collapsed: boolean
}
export const SidebarItemsList: FC<SidebarItemsListProps> = memo((props: SidebarItemsListProps) => {
  const { collapsed } = props
  const sidebarItemListConfig = useSelector(getSidebarItems)

  const renderItem = useCallback((value: SidebarItemProps) => {
    const { path, label, Svg } = value
    return (
      <SidebarItem
        path={path}
        theme={AppLinkTheme.INVERTED_PRIMARY}
        label={label}
        Svg={Svg}
        collapsed={collapsed}
        key={path}
      />
    )
  }, [collapsed])

  return (
    <>
      {sidebarItemListConfig.map((item) => renderItem(item))}
    </>
  )
});
