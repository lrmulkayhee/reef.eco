import React from 'react';
import DataCollectionForm from '../../components/forms/DataCollectionForm';

const DataCollectionPage: React.FC = () => {
    const handleDataSubmit = (data: { coralSize: string; healthStatus: string }) => {
        console.log('Data submitted:', data);
        // You can add any additional logic here, such as updating state or making API calls
    };

    return (
        <div>
            <h1>Data Collection</h1>
            <DataCollectionForm onSubmit={handleDataSubmit} />
        </div>
    );
};

export default DataCollectionPage;