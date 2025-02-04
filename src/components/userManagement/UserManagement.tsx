import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../../services/userService';

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<{ id: string; username: string }[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId: string) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;