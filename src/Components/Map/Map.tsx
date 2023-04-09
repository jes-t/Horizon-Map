import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { CRS } from "leaflet";
import axios from "axios";

import styles from "./Map.module.scss";
import LocationFinder from "../../LocationFinder";

const maxBounds: [number, number][] = [
  [50, -50],
  [-300, 300],
];

export function Map() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/markers").then(function (response) {
      console.log("response.data.markers", response.data.markers);

      setMarkers(response.data.markers);
    });
  }, []);

  return (
    <div className={styles.map}>
      <MapContainer
        center={[-125.5, 130.7]}
        zoom={3}
        crs={CRS.Simple}
        maxBounds={maxBounds}
        maxZoom={5}
        minZoom={2}
        className={styles.container}
      >
        <TileLayer url="http://localhost:5050/horizon_map/{z}/{x}/{y}.jpg" />
        <LocationFinder />
        {markers.map(({ id, coords }) => {
          console.log("id, coords", id, coords);

          return <Marker key={id} position={coords} />;
        })}
      </MapContainer>
    </div>
  );
}
