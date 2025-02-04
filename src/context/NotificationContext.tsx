import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextProps {
    notifications: string[];
    addNotification: (notification: string) => void;
    removeNotification: (index: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<string[]>([]);

    const addNotification = (notification: string) => {
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };

    const removeNotification = (index: number) => {
        setNotifications((prevNotifications) => prevNotifications.filter((_, i) => i !== index));
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};