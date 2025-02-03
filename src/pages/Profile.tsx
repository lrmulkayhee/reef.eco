import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/userService';

const Profile: React.FC = () => {
    const [user, setUser] = useState<{ username: string; email: string } | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUser({
                    username: profile.username,
                    email: profile.email || 'No email provided'
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
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;