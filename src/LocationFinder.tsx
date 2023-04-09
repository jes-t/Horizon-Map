import { useMapEvents } from "react-leaflet";

function LocationFinder(): any {
  useMapEvents({
    click(e) {
      console.log(e.latlng);
    },
  });
  return null;
}

export default LocationFinder;
