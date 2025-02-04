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

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const value = context.raw;
                        return `Min: ${value.min}, Q1: ${value.q1}, Median: ${value.median}, Q3: ${value.q3}, Max: ${value.max}`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2>Box Plot</h2>
            <Chart type="boxplot" data={chartData} options={options} />
        </div>
    );
};

export default BoxPlot;