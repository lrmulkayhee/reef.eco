import React, { useState } from 'react';

const DatasetEmbargoing: React.FC = () => {
    const [datasetName, setDatasetName] = useState('');
    const [embargoDate, setEmbargoDate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle dataset embargoing submission
        console.log('Dataset Embargoing Submitted:', { datasetName, embargoDate });
    };

    return (
        <div>
            <h2>Dataset Embargoing</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Dataset Name:
                    <input type="text" value={datasetName} onChange={(e) => setDatasetName(e.target.value)} />
                </label>
                <label>
                    Embargo Date:
                    <input type="date" value={embargoDate} onChange={(e) => setEmbargoDate(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DatasetEmbargoing;