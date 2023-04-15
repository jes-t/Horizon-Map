import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { Welcome } from "pages/Welcome";
import { Map } from "pages/Map";
import { UseTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    // <div className={classNames("app", {}, [theme])}>
    //   <button onClick={toggleTheme}>Сменить тему</button>
    <AppRouter />
    // </div>
  );
}

export default App;
