interface User {
    id: string;
    username: string;
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

