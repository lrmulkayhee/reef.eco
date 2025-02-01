import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

const Profile: React.FC = () => {
    const [user, setUser] = useState<{ username: string; email: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUser(profile);
            } catch (err) {
                setError('Failed to load user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="profile-page">
            <h1>User Profile</h1>
            {user && (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;