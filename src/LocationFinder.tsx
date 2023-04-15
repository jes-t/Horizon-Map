import { useMapEvents } from "react-leaflet";
import axios from "axios";

function LocationFinder({ setMarkers, markers }: any): any {
  useMapEvents({
    click(e) {
      console.log(e.latlng.lat.toString());
      const markerData = Object.entries(e.latlng).map(([_, field]) => field);
      const data = {
        coords: markerData,
        id: e.latlng.lat.toString(),
      };
      setMarkers([...markers, data]);

      // const response = axios
      //   .post("http://localhost:5050/markers", {
      //     coords: markerData,
      //     id: "euueueueu",
      //   })
      //   .then((response) => {
      //     console.log(response.status, response.data);
      //   });
      // console.log("response", response);

      // return response;
    },
  });
  return null;
}

export default LocationFinder;
