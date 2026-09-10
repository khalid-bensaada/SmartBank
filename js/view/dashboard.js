import { getHistory } from '../storage.js';

export function dashboard(user) {

    return `
        <nav class="navbar">
            
            <div class="nav-links">
                <a href="#dashboard" class="nav-link active">Dashboard</a>
                <a href="#offers" class="nav-link">Offers</a>
                <a href="#simulation" class="nav-link">Simulation</a>
                <a href="#rewards" class="nav-link">Rewards</a>
                <a href="#history" class="nav-link">History</a>
                <a href="#profile" class="nav-link">Profile</a>
            </div>
        </nav>

        <div class="dashboard-container">

            <div class="account-overview">
                <span class="overview-label">ACCOUNT OVERVIEW</span>
                <h1 class="hello-user">Hello ${user ? user.username : 'User'}</h1>
                <div class="balance-row">
                    <span class="balance-amount">$${user ? user.balance : '0.00'}</span>
                    <span class="balance-label">Available Balance</span>
                </div>
            </div>

            <div class="summary-cards">

                <div class="summary-card">
                    <div class="card-top">
                        <span class="card-title">OFFERS</span>
                        
                    </div>
                    <div class="card-value">4</div>
                    <span class="card-subtext">Available</span>
                </div>

                <div class="summary-card">
                    <div class="card-top">
                        <span class="card-title">REWARD</span>
                        
                    </div>
                    <div class="card-value">1,250</div>
                    <span class="card-subtext">Pts balance</span>
                </div>

                <div class="summary-card">
                    <div class="card-top">
                        <span class="card-title">NOTIFICATIONS</span>
                        
                    </div>
                    <div class="card-value">2</div>
                    <span class="card-subtext">New alerts</span>
                </div>

            </div>

            <div class="recent-activity">

                <div class="activity-header">
                    <h2>Recent Activity</h2>
                    <span class="activity-range">LAST 30 DAYS</span>
                </div>

                <div id="activity-list" class="activity-list">
                    
                </div>

                <button id="seeAllBtn" class="see-all-btn">See All</button>

            </div>

        </div>
    `;
}

export function renderActivityList() {

    const activityList = document.getElementById('activity-list');
    const history = getHistory();


    const recentItems = history.slice(0, 5);

    if (recentItems.length === 0) {
        activityList.innerHTML = `<p class="no-activity">No recent activity</p>`;
        return;
    }

    activityList.innerHTML = recentItems.map(item => `
        <div class="activity-item">
            <div class="activity-info">
                <span class="activity-icon">${item.icon || ''}</span>
                <div class="activity-text">
                    <span class="activity-title">${item.title}</span>
                    <span class="activity-date">${item.date} • ${item.subtitle || ''}</span>
                </div>
            </div>
            <span class="activity-amount ${item.amount >= 0 ? 'positive' : 'negative'}">
                ${item.amount >= 0 ? '+' : ''}$${Math.abs(item.amount).toFixed(2)}
            </span>
        </div>
    `).join('');
}
