import React from 'react';
import { CSVLink } from 'react-csv';

interface ExportDataProps {
    data: any[];
}

const DataExport: React.FC<ExportDataProps> = ({ data }) => {
    const headers = [
        { label: 'Coral Size', key: 'coralSize' },
        { label: 'Health Status', key: 'healthStatus' },
        { label: 'Location', key: 'location' },
        { label: 'Date', key: 'date' },
    ];

    return (
        <CSVLink data={data} headers={headers} filename="reef_data.csv">
            Export to CSV
        </CSVLink>
    );
};

export default DataExport;