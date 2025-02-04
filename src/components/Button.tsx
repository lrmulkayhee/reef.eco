import React from 'react';
import '../styles/components/Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }): JSX.Element => {
    return (
        <button className={`button ${className}`} type={type} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;