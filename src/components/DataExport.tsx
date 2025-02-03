import React from 'react';
import { CSVLink } from 'react-csv';

const DataExport: React.FC<{ data: any[] }> = ({ data }) => {
    const headers = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Size', key: 'size' },
        { label: 'Location', key: 'location' },
    ];

    return (
        <div>
            <h2>Export Data</h2>
            <CSVLink data={data} headers={headers} filename="reef_data.csv">
                Download CSV
            </CSVLink>
        </div>
    );
};

export default DataExport;