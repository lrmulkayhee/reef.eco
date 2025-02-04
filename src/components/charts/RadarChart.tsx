import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface RadarChartProps {
    data: { labels: string[]; values: number[] };
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Dataset',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <div>
            <h2>Radar Chart</h2>
            <Radar data={chartData} />
        </div>
    );
};

export default RadarChart;