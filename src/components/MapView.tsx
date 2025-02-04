import React, { useEffect } from 'react';
import L from 'leaflet';

interface Location {
    lat: number;
    lng: number;
    name: string;
}

interface MapViewProps {
    locations: Location[];
}

const MapView: React.FC<MapViewProps> = ({ locations }) => {
    useEffect(() => {
        const map = L.map('map').setView([16.092, -86.887], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        locations.forEach(location => {
            L.marker([location.lat, location.lng]).addTo(map)
                .bindPopup(location.name)
                .openPopup();
        });

        return () => {
            map.remove();
        };
    }, [locations]);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapView;