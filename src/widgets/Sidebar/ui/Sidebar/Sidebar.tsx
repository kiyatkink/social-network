import {FC, useState} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {AppButton} from "shared/ui/AppButton/AppButton";
import {ThemSwitcher} from "features/ThemSwitcher";
import {LanguageSwitcher} from "features/LanguageSwitcher";

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
            <div className={cls.footer}>
                <ThemSwitcher className={cls.ThemSwitcher_size}/>
                <LanguageSwitcher className={cls.LangSwitcher_color}/>
            </div>
        </div>
    );
};