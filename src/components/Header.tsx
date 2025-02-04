import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="/logo.png" alt="Reef Data Toolkit Logo" className="logo" />
                <h1>Reef Data Toolkit</h1>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/data-collection">Data Collection</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/settings">Settings</Link>
            </nav>
            <div className="header-right">
                <input type="text" placeholder="Search..." className="search-bar" />
                <div className="user-profile">
                    <img src="/user-avatar.png" alt="User Avatar" className="avatar" />
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <Link to="/profile">My Profile</Link>
                            <Link to="/settings">Settings</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;