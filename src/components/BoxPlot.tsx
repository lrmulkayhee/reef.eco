import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chartjs-chart-box-and-violin-plot';

declare module 'chart.js' {
    interface ChartTypeRegistry {
        boxplot: {};
    }
}

interface BoxPlotProps {
    data: { labels: string[]; values: number[][] };
}

const BoxPlot: React.FC<BoxPlotProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Box Plot',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Box Plot</h2>
            <Chart type="boxplot" data={chartData} />
        </div>
    );
};

export default BoxPlot;