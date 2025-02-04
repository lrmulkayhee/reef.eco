import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';

const Register: React.FC = () => {
    const handleRegister = (data: { username: string; password: string }) => {
        // Handle registration logic here
        console.log('Registering user:', data);
    };

    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegisterForm onSubmit={handleRegister} />
        </div>
    );
};

export default Register;