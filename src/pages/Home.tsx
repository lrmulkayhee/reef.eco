import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Reef Data Toolkit</h1>
            <p>
                The Reef Data Toolkit is designed to help conservationists and researchers collect, analyze, and visualize reef data effectively.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Dashboard for real-time metrics and visualizations</li>
                <li>Data collection forms for standardized input</li>
                <li>Comprehensive metrics to track conservation efforts</li>
            </ul>
            <p>
                Join us in our mission to protect and restore coral reefs!
            </p>
        </div>
    );
};

export default Home;