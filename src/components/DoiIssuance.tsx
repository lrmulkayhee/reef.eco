import React, { useState } from 'react';

const DoiIssuance: React.FC = () => {
    const [datasetName, setDatasetName] = useState('');
    const [doi, setDoi] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle DOI issuance submission
        console.log('DOI Issuance Submitted:', { datasetName, doi });
    };

    return (
        <div>
            <h2>DOI Issuance</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Dataset Name:
                    <input type="text" value={datasetName} onChange={(e) => setDatasetName(e.target.value)} />
                </label>
                <label>
                    DOI:
                    <input type="text" value={doi} onChange={(e) => setDoi(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DoiIssuance;