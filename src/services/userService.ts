import api from './api';

interface User {
    id: string;
    username: string;
    email?: string; // Add other fields as needed
}

let users: User[] = [
    { id: '1', username: 'user1' },
    { id: '2', username: 'user2' }
];

export const getUsers = async (): Promise<User[]> => {
    return users;
};

export const getUserById = async (userId: string): Promise<User | undefined> => {
    return users.find(user => user.id === userId);
};

export const addUser = async (username: string): Promise<User> => {
    const newUser: User = {
        id: (users.length + 1).toString(),
        username
    };
    users.push(newUser);
    return newUser;
};

export const updateUser = async (userId: string, username: string): Promise<User | undefined> => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex].username = username;
        return users[userIndex];
    }
    return undefined;
};

export const deleteUser = async (userId: string): Promise<boolean> => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true;
    }
    return false;
};

// Fetch user profile from the backend API
export const fetchUserProfile = async (): Promise<User> => {
    const response = await api.get('/user/profile');
    return response.data;
};

// Update user profile on the backend API
export const updateUserProfile = async (data: Partial<User>): Promise<User> => {
    const response = await api.put('/user/profile', data);
    return response.data;
};

// Export getUserProfile for consistency with the import in Profile.tsx
export const getUserProfile = fetchUserProfile;