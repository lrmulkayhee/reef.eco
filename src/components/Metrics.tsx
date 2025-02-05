import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export type MetricsType = {
    totalFishSpecies: number;
    averageCoralCoverage: number;
    averageWaterTemperature: number;
    labels: string[];
    data: number[];
};

interface MetricsProps {
    data: MetricsType;
}

const Metrics: React.FC<MetricsProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Coral Growth',
                data: data.data,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div>
            <h2>Coral Growth Over Time</h2>
            <Line data={chartData} />
        </div>
    );
};

export default Metrics;