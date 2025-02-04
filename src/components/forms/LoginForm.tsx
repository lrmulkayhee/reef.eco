import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit: (credentials: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            setError('Both fields are required.');
            return;
        }
        onSubmit(credentials);
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Username:
                <input type="text" name="username" value={credentials.username} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;