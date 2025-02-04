import React from 'react';
import { Scatter } from 'react-chartjs-2';
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

interface ScatterPlotProps {
    data: { x: number; y: number }[];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: data,
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    };

    return (
        <div>
            <h2>Scatter Plot</h2>
            <Scatter data={chartData} />
        </div>
    );
};

export default ScatterPlot;