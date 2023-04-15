import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
