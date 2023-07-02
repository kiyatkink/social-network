import {FC, useState} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {AppButton} from "shared/ui/AppButton/AppButton";
import {ThemSwitcher} from "features/ThemSwitcher";

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <AppButton onClick={toggleCollapsed}>Toggle</AppButton>
            <ThemSwitcher className={cls.ThemSwitcher_position}/>
        </div>
    );
};