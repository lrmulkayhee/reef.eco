import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

interface BubbleChartProps {
    data: { x: number; y: number; r: number }[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Bubble Dataset',
                data: data,
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    };

    return (
        <div>
            <h2>Bubble Chart</h2>
            <Bubble data={chartData} />
        </div>
    );
};

export default BubbleChart;