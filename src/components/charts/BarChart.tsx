import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface BarChartProps {
    data: number[];
    labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Coral Growth',
                data: data,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div>
            <h2>Coral Growth Over Time</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;