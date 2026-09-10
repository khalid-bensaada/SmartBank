
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
    return users.some(k => k.email === email);
}

export function getUserByEmail(email) {
    const users = getUsers();
    return users.find(k => k.email === email) || null;
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


export function getHistory() {
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history) : [];
}

export function addHistoryItem(item) {

    const history = getHistory();
    history.unshift(item); // newest first
    localStorage.setItem('history', JSON.stringify(history));
}