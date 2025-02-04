import React, { useState } from 'react';

const QualityControl: React.FC = () => {
    const [standards, setStandards] = useState('');
    const [changes, setChanges] = useState('');
    const [qualityChecks, setQualityChecks] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle quality control submission
        console.log('Quality Control Submitted:', { standards, changes, qualityChecks });
    };

    return (
        <div>
            <h2>Quality Control</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Standards:
                    <textarea value={standards} onChange={(e) => setStandards(e.target.value)} />
                </label>
                <label>
                    Document Changes:
                    <textarea value={changes} onChange={(e) => setChanges(e.target.value)} />
                </label>
                <label>
                    Quality Checks:
                    <textarea value={qualityChecks} onChange={(e) => setQualityChecks(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QualityControl;