import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/userService';
import '../../styles/pages/Profile.css';

const Profile: React.FC = () => {
    const [user, setUser] = useState<{ username: string; email: string; organization?: string; language?: string; theme?: string } | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUser({
                    username: profile.username,
                    email: profile.email || 'No email provided',
                    organization: profile.organization || 'No organization provided',
                    language: profile.language || 'English',
                    theme: profile.theme || 'Light'
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Profile</h1>
                <div className="actions">
                    <button className="button primary">Edit Profile</button>
                    <button className="button secondary">Change Password</button>
                </div>
            </div>
            <div className="profile-content">
                <div className="profile-card">
                    <h2>Personal Information</h2>
                    <div className="profile-info">
                        <label>Username:</label>
                        <span>{user.username}</span>
                        <label>Email:</label>
                        <span>{user.email}</span>
                        <label>Organization:</label>
                        <span>{user.organization}</span>
                    </div>
                </div>
                <div className="profile-card">
                    <h2>Preferences</h2>
                    <div className="profile-info">
                        <label>Language:</label>
                        <span>{user.language}</span>
                        <label>Theme:</label>
                        <span>{user.theme}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;