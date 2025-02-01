import React from 'react';
import Metrics from './Metrics';
import DataCollectionForm from './DataCollectionForm';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Reef Data Dashboard</h1>
            <Metrics />
            <DataCollectionForm />
        </div>
    );
};

export default Dashboard;