import React, { useState } from 'react';

interface RegisterFormProps {
    onSubmit: (data: { username: string; password: string; email: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState({
        username: '',
        password: '',
        email: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.username || !data.password || !data.email) {
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
                Username:
                <input type="text" name="username" value={data.username} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={data.password} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={data.email} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;