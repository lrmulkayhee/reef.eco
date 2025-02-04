import React, { useState } from 'react';

interface DataCollectionFormProps {
    onSubmit: (data: { coralSize: string; healthStatus: string; location: string; date: string }) => void;
}

/**
 * DataCollectionForm component for collecting reef data.
 * @param {DataCollectionFormProps} props - The props for the component.
 */
const DataCollectionForm: React.FC<DataCollectionFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        coralSize: '',
        healthStatus: '',
        location: '',
        date: ''
    });
    const [error, setError] = useState('');

    /**
     * Handle input change event.
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    /**
     * Handle form submit event.
     * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.coralSize || !data.healthStatus || !data.location || !data.date) {
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
            <button typeimport React, { useState } from 'react';

interface DataCollectionFormProps {
    onSubmit: (data: { coralSize: string; healthStatus: string; location: string; date: string }) => void;
}

/**
 * DataCollectionForm component for collecting reef data.
 * @param {DataCollectionFormProps} props - The props for the component.
 */
const DataCollectionForm: React.FC<DataCollectionFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        coralSize: '',
        healthStatus: '',
        location: '',
        date: ''
    });
    const [error, setError] = useState('');

    /**
     * Handle input change event.
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    /**
     * Handle form submit event.
     * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.coralSize || !data.healthStatus || !data.location || !data.date) {
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
            <button type