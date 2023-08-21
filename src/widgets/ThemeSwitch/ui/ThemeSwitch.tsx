import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkTheme from "shared/assets/icons/theme-dark.svg";
import LightTheme from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitch.module.scss";

interface ThemeSwitchProps {
  className?: string;
}
export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
    const { theme, handleToggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitch, {}, [className])}
            onClick={handleToggleTheme}
        >
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>
    );
};
