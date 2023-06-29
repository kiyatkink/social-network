import {useContext} from "react";
import {LOCAL_STORAGE_THEME_VALUE, ThemeContext, Thems} from "./ThemeContext";

export interface UseThemeResult {
    theme: Thems,
    toggleTheme: () => void
}
export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Thems.LIGHT ? Thems.DARK : Thems.LIGHT
        localStorage.setItem(LOCAL_STORAGE_THEME_VALUE, newTheme)
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}