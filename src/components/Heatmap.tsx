import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
declare module 'leaflet' {
    function heatLayer(data: any[], options?: any): any;
}

interface HeatmapProps {
    data: { lat: number; lng: number; intensity: number }[];
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
    useEffect(() => {
        const map = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const heatData = data.map(d => [d.lat, d.lng, d.intensity]);
        L.heatLayer(heatData, { radius: 25 }).addTo(map);

        return () => {
            map.remove();
        };
    }, [data]);

    return <div id="map" style={{ height: '500px' }}></div>;
};

export default Heatmap;