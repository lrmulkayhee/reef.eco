import React, { useEffect } from 'react';
import L from 'leaflet';

const MapView: React.FC = () => {
    useEffect(() => {
        const map = L.map('map').setView([16.092, -86.887], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        L.marker([16.092, -86.887]).addTo(map)
            .bindPopup('Utopia Village, Utila, Bay Islands, Honduras')
            .openPopup();
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapView;