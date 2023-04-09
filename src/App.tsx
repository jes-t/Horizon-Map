import { Route, Routes } from "react-router-dom";

// import "./App.scss";
import "./index.scss";
import { Map } from "./Components/Map/Map";
import { Welcome } from "./Components/Welcome/Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <Routes>
        <Route path="map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
