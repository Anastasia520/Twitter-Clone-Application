import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
  handleToggleTheme: () => void;
  theme: Theme;
}

export default function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        handleToggleTheme,
        theme,
    };
}
