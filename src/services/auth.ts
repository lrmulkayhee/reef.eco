import api from './api';

export const login = async (username: string, password: string) => {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
};

export const register = async (username: string, password: string) => {
    const response = await api.post('/auth/register', { username, password });
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get('/auth/profile');
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/auth/logout');
    return response.data;
};

// Two-Factor Authentication
export const verifyTwoFactorCode = async (code: string) => {
    const response = await api.post('/auth/verify-2fa', { code });
    return response.data;
};