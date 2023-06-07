import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { CRS } from 'leaflet';
import axios from 'axios';

// import { PanelMenu } from 'feature/panel/ui/MenuPanel';
import { SideBar } from 'widgets/SideBar';
import styles from './Map.module.scss';
import LocationFinder from '../../../LocationFinder';

const maxBounds: [number, number][] = [
    [50, -50],
    [-300, 300],
];

export default function Map() {
    const [markers, setMarkers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isVisibleMarker, setIsVisibleMarker] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5050/markers').then((response) => {
            console.log('response.data.markers', response.data.markers);

            setMarkers(response.data.markers);
        });
    }, []);

    return (
        <div className={styles.map}>
            {/* <PanelMenu
        markers={markers}
        setIsVisibleMarker={setIsVisibleMarker}
        isVisibleMarker={isVisibleMarker}
      /> */}
            <SideBar />
            <MapContainer
                center={[-125.5, 130.7]}
                zoom={3}
                crs={CRS.Simple}
                maxBounds={maxBounds}
                maxZoom={5}
                minZoom={2}
                className={styles.container}
            >
                <TileLayer
                    url="http://localhost:5050/horizon_map/{z}/{x}/{y}.jpg"
                />
                <LocationFinder markers={markers} setMarkers={setMarkers} />
                {isVisibleMarker
                 && markers.map(({ id, coords }) => <Marker key={id} position={coords} />)}
            </MapContainer>
        </div>
    );
}
