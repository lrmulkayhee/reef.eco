import React, { useState } from 'react';

interface DataCollectionFormProps {
    onSubmit: (data: { coralSize: string; healthStatus: string }) => void;
}

const DataCollectionForm: React.FC<DataCollectionFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        coralSize: '',
        healthStatus: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            coralSize: data.coralSize,
            healthStatus: data.healthStatus
        });
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Coral Size:
                    <input type="text" name="coralSize" value={data.coralSize} onChange={handleChange} />
                </label>
                <label>
                    Health Status:
                    <input type="text" name="healthStatus" value={data.healthStatus} onChange={handleChange} />
                </label>
                <button type="submit">Submit Data</button>
            </form>
            {submitted && <p>Data submitted successfully</p>}
        </div>
    );
};

export default DataCollectionForm;