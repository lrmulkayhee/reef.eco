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

interface HistogramProps {
    data: { labels: string[]; values: number[] };
}

const Histogram: React.FC<HistogramProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Frequency',
                data: data.values,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Histogram</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default Histogram;