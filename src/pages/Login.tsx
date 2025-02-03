import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
    const handleLoginSubmit = (data: { username: string; password: string }) => {
        console.log('Login submitted:', data);
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm onSubmit={handleLoginSubmit} />
        </div>
    );
};

export default Login;