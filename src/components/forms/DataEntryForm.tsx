import React, { useState } from 'react';

interface DataEntryFormProps {
    onSubmit: (data: { field1: string; field2: string; field3: string }) => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        field1: '',
        field2: '',
        field3: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.field1 || !data.field2 || !data.field3) {
            setError('All fields are required.');
            return;
        }
        onSubmit(data);
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Field 1:
                <input type="text" name="field1" value={data.field1} onChange={handleChange} />
            </label>
            <label>
                Field 2:
                <input type="text" name="field2" value={data.field2} onChange={handleChange} />
            </label>
            <label>
                Field 3:
                <input type="text" name="field3" value={data.field3} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataEntryForm;