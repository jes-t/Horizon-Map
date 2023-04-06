import { useMapEvents } from "react-leaflet";

function LocationFinder() {
  useMapEvents({
    click(e) {
      console.log(e.latlng);
    },
  });
  return null;
}

export default LocationFinder;
