import { getUsers, getCurrentUser } from './storage.js';
import { authForm, authEvent } from './view/auth.js';
import { dashboard, renderActivityList } from './view/dashboard.js';

const appContainer = document.getElementById('app');

const PUBLIC_ROUTES = ['login', 'signup'];

function getCurrentRoute() {
    const hash = window.location.hash.replace('#', '');
    return hash || 'login';
}

function renderRoute() {
    const route = getCurrentRoute();
    const user = getCurrentUser();


    if (!user && !PUBLIC_ROUTES.includes(route)) {
        window.location.hash = '#login';
        return;
    }


    if (user && PUBLIC_ROUTES.includes(route)) {
        window.location.hash = '#dashboard';
        return;
    }

    switch (route) {
        case 'login':
            appContainer.innerHTML = authForm('login');
            authEvent('login');
            break;

        case 'signup':
            appContainer.innerHTML = authForm('signup');
            authEvent('signup');
            break;

        case 'dashboard':
            appContainer.innerHTML = dashboard(user);
            renderActivityList();
            break;

        default:
            window.location.hash = '#login';
    }
}

export function initRouter() {
    renderRoute();
    window.addEventListener('hashchange', renderRoute);
}