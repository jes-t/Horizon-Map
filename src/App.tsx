import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { MapAsync } from "./pages/Map/Map.async";
import { WelcomeAsync } from "./pages/Welcome/Welcome.async";
import { UseTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<WelcomeAsync />} />
          <Route path="/map" element={<MapAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
