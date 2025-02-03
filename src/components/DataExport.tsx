import React from 'react';
import { CSVLink } from 'react-csv';

const DataExport: React.FC<{ data: any[] }> = ({ data }) => {
    const headers = [
        { label: 'Coral Size', key: 'coralSize' },
        { label: 'Health Status', key: 'healthStatus' },
        // Add more headers as needed
    ];

    return (
        <CSVLink data={data} headers={headers} filename="reef_data.csv">
            Export to CSV
        </CSVLink>
    );
};

export default DataExport;