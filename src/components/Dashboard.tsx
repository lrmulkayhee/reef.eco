import React from 'react';
import Metrics from './Metrics';
import DataCollectionForm from './DataCollectionForm';

const Dashboard: React.FC = () => {
    const handleDataSubmit = (data: { coralSize: string; healthStatus: string }) => {
        console.log('Data submitted:', data);
    };

    return (
        <div>
            <h1>Reef Data Dashboard</h1>
            <Metrics />
            <DataCollectionForm onSubmit={handleDataSubmit} />
        </div>
    );
};

export default Dashboard;