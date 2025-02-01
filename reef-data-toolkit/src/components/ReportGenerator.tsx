import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ReportGenerator: React.FC = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Coral A', size: '10cm', location: 'Reef 1' },
        { id: 2, name: 'Coral B', size: '15cm', location: 'Reef 2' },
        // Add more data as needed
    ]);

    const generatePDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            head: [['ID', 'Name', 'Size', 'Location']],
            body: data.map(item => [item.id, item.name, item.size, item.location]),
        });
        doc.save('reef_data_report.pdf');
    };

    return (
        <div className="report-generator">
            <h2>Generate Report</h2>
            <button onClick={generatePDF}>Download PDF</button>
        </div>
    );
};

export default ReportGenerator;