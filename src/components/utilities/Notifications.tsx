import React from 'react';

interface Notification {
    id: string;
    message: string;
    date: string;
}

interface NotificationsProps {
    notifications: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
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