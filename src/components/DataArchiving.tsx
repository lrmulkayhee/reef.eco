import React, { useState } from 'react';

const DataArchiving: React.FC = () => {
    const [repository, setRepository] = useState('');
    const [metadata, setMetadata] = useState('');
    const [doi, setDoi] = useState('');
    const [embargo, setEmbargo] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle data archiving submission
        console.log('Data Archiving Submitted:', { repository, metadata, doi, embargo });
    };

    return (
        <div>
            <h2>Data Archiving</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Repository:
                    <input type="text" value={repository} onChange={(e) => setRepository(e.target.value)} />
                </label>
                <label>
                    Metadata:
                    <textarea value={metadata} onChange={(e) => setMetadata(e.target.value)} />
                </label>
                <label>
                    DOI:
                    <input type="text" value={doi} onChange={(e) => setDoi(e.target.value)} />
                </label>
                <label>
                    Embargo:
                    <input type="checkbox" checked={embargo} onChange={(e) => setEmbargo(e.target.checked)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DataArchiving;