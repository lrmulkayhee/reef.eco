import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { verifyTwoFactorCode } from '../services/auth';

const TwoFactorAuth: React.FC = () => {
    const { login } = useAuth();
    const [code, setCode] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await verifyTwoFactorCode(code);
            if (response.success) {
                login(response.role);
            } else {
                // Handle verification error
                console.error('Verification failed:', response.message);
            }
        } catch (error) {
            console.error('Error during verification:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Two-Factor Code:
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            </label>
            <button type="submit">Verify</button>
        </form>
    );
};

export default TwoFactorAuth;