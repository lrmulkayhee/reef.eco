import api from './api';

interface EmailNotification {
    to: string;
    subject: string;
    message: string;
}

export const sendEmailNotification = async (notification: EmailNotification) => {
    const response = await api.post('/notifications/email', notification);
    return response.data;
};