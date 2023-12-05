import { useState } from "react";
import { useTranslation } from "react-i18next";

import cls from "./Sidebar.module.scss";
import AboutPage from "shared/assets/icons/about.svg";
import MainPage from "shared/assets/icons/main.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { RouterPaths } from "shared/config/routeConfig/routeConfig";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t, i18n } = useTranslation();

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
      <Button
        data-testid="sidebar-toggle"
        type="button"
        square
        size={SizeButton.L}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={handleToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RouterPaths.main}
          className={cls.item}
        >
          <MainPage className={cls.icon} />
          <span className={cls.link}>{t("Main page")}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.RED}
          to={RouterPaths.about}
          className={cls.item}
        >
          <AboutPage className={cls.icon} />
          <span className={cls.link}>{t("About page")}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitch />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
