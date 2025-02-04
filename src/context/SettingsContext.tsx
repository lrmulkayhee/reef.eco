import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextProps {
    settings: { [key: string]: any };
    updateSetting: (key: string, value: any) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
    const [settings, setSettings] = useState<{ [key: string]: any }>({
        theme: 'light',
        language: 'en',
        // Add other default settings here
    });

    const updateSetting = (key: string, value: any) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};