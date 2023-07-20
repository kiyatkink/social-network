import { FC } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { sidebarItemListConfig } from '../../config/sidebarItemListConfig';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarItemsListProps {
    collapsed: boolean
}
export const SidebarItemsList: FC<SidebarItemsListProps> = ({ collapsed }) => (
  <>
    {Object.entries(sidebarItemListConfig).map(([key, value]) => {
      const { path, label, Icon } = value
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
);