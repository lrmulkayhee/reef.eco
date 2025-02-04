import React, { ReactNode } from 'react';
import { useNotification } from '../../context/NotificationContext';

interface Notification {
    id: string;
    message: string;
    date: string;
}

interface NotificationsProps {
    notifications: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }): JSX.Element => {
    return (
        <div>
            <h3>Notifications</h3>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.message}</p>
                        <small>{notification.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;