import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    userRole: string;
    login: (role: string) => void;
    logout: () => void;
    hasPermission: (requiredRole: string) => boolean;
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

    const hasPermission = (requiredRole: string) => {
        const rolesHierarchy = ['user', 'admin'];
        return rolesHierarchy.indexOf(userRole) >= rolesHierarchy.indexOf(requiredRole);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout, hasPermission }}>
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