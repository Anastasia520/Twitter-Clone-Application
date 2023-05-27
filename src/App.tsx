import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import useTheme from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";


const App = () => {

  const {theme, handleToggleTheme} = useTheme()
  


  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/about"}>О сайте</Link>
      <Link to={"/"}>Главная</Link>

      <button onClick={handleToggleTheme}>TOGGLE THEME</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
