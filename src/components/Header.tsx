import React from 'react';
import '../styles/components/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Reef Data Toolkit</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/data-collection">Data Collection</a>
                <a href="/reports">Reports</a>
                <a href="/settings">Settings</a>
            </nav>
        </header>
    );
};

export default Header;