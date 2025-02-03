import axios from 'axios';

export const login = async (username: string, password: string) => {
    const response = await axios.post('/api/auth/login', { username, password });
    return response.data;
};

export const register = async (username: string, password: string) => {
    const response = await axios.post('/api/auth/register', { username, password });
    return response.data;
};

export const getProfile = async () => {
    const response = await axios.get('/api/auth/profile');
    return response.data;
};