import React from 'react';

interface StatisticsProps {
    totalFishSpecies: number;
    averageCoralCoverage: number;
    averageWaterTemperature: number;
    labels: string[];
    data: number[];
}

const Statistics: React.FC<StatisticsProps> = ({ totalFishSpecies, averageCoralCoverage, averageWaterTemperature, labels, data }) => {
    return (
        <div>
            <h2>Key Statistics</h2>
            <ul>
                <li>Total Fish Species: {totalFishSpecies}</li>
                <li>Average Coral Coverage: {averageCoralCoverage}%</li>
                <li>Average Water Temperature: {averageWaterTemperature}°C</li>
            </ul>
            <h3>Data Overview</h3>
            <ul>
                {labels.map((label, index) => (
                    <li key={index}>{label}: {data[index]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Statistics;