import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { CRS } from "leaflet";
import styled from "styled-components";
import "../../App.css";
import LocationFinder from "../../LocationFinder";
import axios from "axios";

const maxBounds: [number, number][] = [
  [50, -50],
  [-300, 300],
];

export function Map() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/markers").then(function (response) {
      setMarkers(response.data.markers);
    });
  }, []);

  return (
    <Root>
      <StyledMap
        center={[-125.5, 130.7]}
        zoom={3}
        crs={CRS.Simple}
        maxBounds={maxBounds}
        maxZoom={5}
        minZoom={2}
      >
        <TileLayer url="http://localhost:5050/horizon_map/{z}/{x}/{y}.jpg" />
        <LocationFinder />
        {markers.map(({ id, coords }) => (
          <Marker key={id} position={coords} />
        ))}
      </StyledMap>
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

const StyledMap = styled(MapContainer)`
  height: 100%;
  width: 100%;

  /* background-color: #000; */
`;
