
export function saveUser(user){
    localStorage.setItem('user' ,JSON.stringify(user)) ;
}

export function getUser(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function logoutUser(){
    localStorage.removeItem('user');
}