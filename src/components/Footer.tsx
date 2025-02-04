import React from 'react';
import '../styles/components/Footer.css';

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Reef Data Toolkit is dedicated to providing the best tools and resources for reef data analysis and conservation.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <nav>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/faq">FAQ</a>
                    </nav>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@reefdata.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Reef Data Toolkit. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;