import React, { useEffect } from 'react';
import L from 'leaflet';

interface Region {
    name: string;
    coordinates: [number, number][];
    value: number;
}

interface ChoroplethMapProps {
    regions: Region[];
}

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({ regions }) => {
    useEffect(() => {
        const map = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        regions.forEach(region => {
            const polygon = L.polygon(region.coordinates, {
                color: 'blue',
                fillColor: getColor(region.value),
                fillOpacity: 0.5,
            }).addTo(map);

            polygon.bindPopup(`${region.name}: ${region.value}`);
        });

        return () => {
            map.remove();
        };
    }, [regions]);

    const getColor = (value: number) => {
        return value > 1000 ? '#800026' :
            value > 500 ? '#BD0026' :
                value > 200 ? '#E31A1C' :
                    value > 100 ? '#FC4E2A' :
                        value > 50 ? '#FD8D3C' :
                            value > 20 ? '#FEB24C' :
                                value > 10 ? '#FED976' :
                                    '#FFEDA0';
    };

    return <div id="map" style={{ height: '500px' }}></div>;
};

export default ChoroplethMap;