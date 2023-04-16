import { Suspense } from "react";

import "./styles/index.scss";
import { UseTheme } from "app/providers/ThemeProviders";
import { AppRouter } from "./providers/router";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";

function App() {
  // const { theme } = UseTheme();

  return (
    // <div className={classNames("app", {}, [theme])}>
    //   <ThemeSwitcher />
    <Suspense fallback="">
      <AppRouter />
    </Suspense>
    // {/* </div> */}
  );
}

export default App;
