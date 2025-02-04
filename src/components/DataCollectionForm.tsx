import React, { useState } from 'react';

interface DataCollectionFormProps {
    onSubmit: (data: { coralSize: string; healthStatus: string; location: string; date: string }) => void;
}

const DataCollectionForm: React.FC<DataCollectionFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        coralSize: '',
        healthStatus: '',
        location: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Coral Size:
                <input type="text" name="coralSize" value={data.coralSize} onChange={handleChange} />
            </label>
            <label>
                Health Status:
                <input type="text" name="healthStatus" value={data.healthStatus} onChange={handleChange} />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={data.location} onChange={handleChange} />
            </label>
            <label>
                Date:
                <input type="date" name="date" value={data.date} onChange={handleChange} />
            </label>
            <button type="submit">Submit Data</button>
        </form>
    );
};

export default DataCollectionForm;