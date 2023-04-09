import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { Welcome } from "pages/Welcome";
import { Map } from "pages/Map";
import { UseTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
