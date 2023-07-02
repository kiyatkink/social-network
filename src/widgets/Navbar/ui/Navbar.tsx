import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemSwitcher} from "features/ThemSwitcher";

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = (props) => {
    const { classesNames } = props
    return (
        <div className={classNames(cls.Navbar, {}, [classesNames])}>
            <ThemSwitcher/>
            <div className={cls.LinkSection}>
                <AppLink to="/" theme={AppLinkTheme.INVERTED_PRIMARY}>Главная</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED_PRIMARY}>О сайте</AppLink>
            </div>
        </div>
    );
};
