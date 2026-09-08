
export function saveUser(user){
    localStorage.setItem('user' ,JSON.stringify(user)) ;
}

export function getUser(){
    const user = localStorage.getItem('user');
}

export function logoutUser(){
    localStorage.removeItem('user');
}