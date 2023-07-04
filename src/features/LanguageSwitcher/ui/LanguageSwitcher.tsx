import {FC} from "react";
import {AppButton, AppButtonThems} from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";

interface LanguageSwitcherProps {
    className?: string
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className } = props

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage( i18n.language === "ru" ? "en" : "ru" )
    }

    return <>
        <AppButton theme={AppButtonThems.CLEAR} onClick={toggleLanguage}  className={classNames("LanguageSwitcher", {}, [className])}>
            {t("Язык")}
        </AppButton>
    </>;
};