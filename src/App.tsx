import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Map } from "./Components/Map/Map";
import { Welcome } from "./Components/Welcome/Welcome";

function App() {
  return (
    <Root>
      <Welcome />
      <Routes>
        <Route path="map" element={<Map />} />
      </Routes>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export default App;
