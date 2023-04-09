import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";
import { MapAsync } from "./pages/Map/Map.async";
import { WelcomeAsync } from "./pages/Welcome/Welcome.async";

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<WelcomeAsync />} />
          <Route path="/map" element={<MapAsync />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
