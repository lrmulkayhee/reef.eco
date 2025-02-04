import React from 'react';
import { Line } from 'react-chartjs-2';

interface DataVisualizationProps {
    data: { labels: string[]; datasets: { label: string; data: number[] }[] };
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
    return (
        <div>
            <h2>Data Visualization</h2>
            <Line data={data} />
        </div>
    );
};

export default DataVisualization;