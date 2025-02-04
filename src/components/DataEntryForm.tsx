import React, { useState } from 'react';

interface DataEntryFormProps {
    onSubmit: (data: { fileName: string; dataContent: string }) => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ onSubmit }) => {
    const [fileName, setFileName] = useState('');
    const [dataContent, setDataContent] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ fileName, dataContent });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                File Name:
                <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
            </label>
            <label>
                Data Content:
                <textarea value={dataContent} onChange={(e) => setDataContent(e.target.value)} />
            </label>
            <button type="submit">Submit Data</button>
        </form>
    );
};

export default DataEntryForm;