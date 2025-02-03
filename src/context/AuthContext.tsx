import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    userRole: string;
    login: (role: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');

    const login = (role: string) => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserRole('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};