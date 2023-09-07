import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button data-testid="sidebar-toggle" type="button" onClick={handleToggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
