import { getUsers } from './storage.js';
import { authForm, authEvent } from './view/auth.js';

const appContainer = document.getElementById('app');

function getCurrentRoute() {
    const hash = window.location.hash.replace('#', '');
    return hash || 'login';
}

function renderRoute() {
    const route = getCurrentRoute();

    switch (route) {
        case 'login':
            appContainer.innerHTML = authForm('login');
            authEvent('login');
            break;

        case 'signup':
            appContainer.innerHTML = authForm('signup');
            authEvent('signup');
            break;

        default:

            window.location.hash = '#login';
    }
}

export function initRouter() {
    renderRoute();
    window.addEventListener('hashchange', renderRoute);
}