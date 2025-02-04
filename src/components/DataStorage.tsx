import React from 'react';

const DataStorage: React.FC = () => {
    const handleBackup = () => {
        // Handle data backup
        console.log('Data backed up successfully');
    };

    return (
        <div>
            <h2>Data Storage</h2>
            <button onClick={handleBackup}>Backup Data</button>
        </div>
    );
};

export default DataStorage;