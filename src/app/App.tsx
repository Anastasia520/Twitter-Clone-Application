import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import classNames from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/about"}>О сайте</Link>
      <Link to={"/"}>Главная</Link>

      <button onClick={handleToggleTheme}>TOGGLE THEME</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
