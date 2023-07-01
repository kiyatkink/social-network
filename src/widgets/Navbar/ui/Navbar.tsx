import {useTheme} from "shared/lib/theme";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = (props) => {
    const { classesNames } = props
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames(cls.Navbar, {}, [classesNames])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div className={cls.LinkSection}>
                <AppLink to="/" theme={AppLinkTheme.INVERTED_PRIMARY}>Главная</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED_PRIMARY}>Об авторе</AppLink>
            </div>
        </div>
    );
};
