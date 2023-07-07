import {
  FC, PropsWithChildren, useMemo, useState,
} from 'react';
import {
  LOCAL_STORAGE_THEME_VALUE,
  ThemeContext,
  Thems,
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_VALUE) as Thems || Thems.LIGHT;
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Thems>(defaultTheme);

  const defaultValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      { children }
    </ThemeContext.Provider>
  );
};
