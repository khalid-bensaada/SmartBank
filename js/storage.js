
export function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

export function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

export function emailExists(email) {
    const users = getUsers();
    return users.some(u => u.email === email);
}

export function getUserByEmail(email) {
    const users = getUsers();
    return users.find(u => u.email === email) || null;
}

export function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

export function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

export function logoutUser() {
    localStorage.removeItem('currentUser');
}