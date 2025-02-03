import React, { useState } from 'react';
import Metrics from './Metrics';
import DataCollectionForm from './DataCollectionForm';

const Dashboard: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic
    const [metricsData, setMetricsData] = useState<number[] | null>(null); // Replace with actual data fetching logic

    const handleDataSubmit = (data: { coralSize: string; healthStatus: string }) => {
        console.log('Data submitted:', data);
        // Update metrics data here
        setMetricsData([65, 59, 80, 81, 56, 55, 40]); // Example data
    };

    return (
        <div>
            <h1>Reef Data Dashboard</h1>
            {!isLoggedIn ? (
                <p>Please log in to view the dashboard.</p>
            ) : !metricsData ? (
                <p>No metrics data available.</p>
            ) : (
                <>
                    <Metrics data={metricsData} />
                    <DataCollectionForm onSubmit={handleDataSubmit} />
                </>
            )}
        </div>
    );
};

export default Dashboard;