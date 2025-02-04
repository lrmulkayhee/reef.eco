import React from 'react';
import '../styles/components/Footer.css';

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Reef Data Toolkit. All rights reserved.</p>
            <nav>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;