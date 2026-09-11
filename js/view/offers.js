const financialOffers = [
    {
        id: 'balance-transfer',
        tag: 'CREDIT FACILITY',
        rate: '0% APR',
        title: 'Low APR Balance Transfer',
        description: 'Consolidate higher-interest revolving balances with zero interest charges during the introductory qualification window.',
        feature: '0% Intro APR for 15 Mos',
        footerInfo: 'No annual membership fee'
    },
    {
        id: 'savings-boost',
        tag: 'SAVINGS',
        rate: '4.85% APY',
        title: 'High-Yield Savings Boost',
        description: 'Maximize cash reserves with preferred high-yield rate lock. Zero transfer friction and full FDIC insurance coverage.',
        feature: '4.85% APY Guarantee',
        footerInfo: '$500 minimum opening deposit'
    },
    {
        id: 'auto-refinance',
        tag: 'AUTO LOAN',
        rate: '-1.50% RATE',
        title: 'Auto Refinance Special',
        description: 'Lower current monthly payments by refinancing an existing vehicle loan with fast-track automated approval.',
        feature: 'Save up to $1,200/yr',
        footerInfo: 'Terms from 24 to 72 months'
    },
    {
        id: 'cashback-card',
        tag: 'CARD REWARDS',
        rate: '3.0% FIXED',
        title: 'Premier Cashback Card',
        description: 'Earn uncompromising returns on enterprise and general expenditure without category ceilings or expirations.',
        feature: '3% Unlimited Cashback',
        footerInfo: '$200 statement credit bonus'
    }
];


const flashSales = [
    {
        id: 'temu-spinner-boost',
        tag: 'REWARDS EVENT',
        title: 'Double Spin Weekend',
        description: 'Every reward spin this weekend counts twice. Limited-time boost on the rewards wheel.',
        footerInfo: 'No purchase required',
        endsAt: Date.now() + (18 * 60 * 60 * 1000) + (42 * 60 * 1000)
    },
    {
        id: 'aliexpress-flash',
        tag: 'PARTNER DEAL',
        title: 'AliExpress Flash Sale',
        description: 'Exclusive short-window discount on partner marketplace purchases made through SmartBank.',
        footerInfo: 'Offer ends soon',
        endsAt: Date.now() + (3 * 60 * 60 * 1000) + (15 * 60 * 1000)
    }
];

let countdownInterval = null;

function renderOfferCard(offer) {
    return `
        <div class="offer-card" data-offer-id="${offer.id}">
            <div class="card-header">
                <span class="tag">${offer.tag}</span>
                <span class="rate">${offer.rate}</span>
            </div>
            <h2 class="card-title">${offer.title}</h2>
            <p class="card-description">${offer.description}</p>
            <div class="feature-badge">
                <span>${offer.feature}</span>
            </div>
            <div class="card-footer">
                <span class="footer-info">${offer.footerInfo}</span>
                <button class="details-btn" data-offer-id="${offer.id}">Details</button>
            </div>
        </div>
    `;
}

function renderFlashCard(offer) {
    return `
        <div class="offer-card flash-card" data-offer-id="${offer.id}">
            <div class="card-header">
                <span class="tag">${offer.tag}</span>
                <span class="rate live-badge">LIVE</span>
            </div>
            <h2 class="card-title">${offer.title}</h2>
            <p class="card-description">${offer.description}</p>
            <div class="feature-badge countdown-badge" data-ends-at="${offer.endsAt}">
                <span class="countdown-text">--:--:--</span>
            </div>
            <div class="card-footer">
                <span class="footer-info">${offer.footerInfo}</span>
                <button class="details-btn" data-offer-id="${offer.id}">Details</button>
            </div>
        </div>
    `;
}

function renderOffersGrid(type) {
    if (type === 'flash') {
        return flashSales.map(renderFlashCard).join('');
    }
    return financialOffers.map(renderOfferCard).join('');
}

function formatTimeLeft(msLeft) {
    if (msLeft <= 0) return 'Expired';

    const totalSeconds = Math.floor(msLeft / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startCountdowns() {

    if (countdownInterval) clearInterval(countdownInterval);

    function updateAll() {
        const badges = document.querySelectorAll('.countdown-badge');
        if (badges.length === 0) return;

        badges.forEach(badge => {
            const endsAt = Number(badge.getAttribute('data-ends-at'));
            const msLeft = endsAt - Date.now();
            const textEl = badge.querySelector('.countdown-text');
            textEl.textContent = formatTimeLeft(msLeft);

            if (msLeft <= 0) {
                badge.closest('.offer-card').classList.add('expired');
            }
        });
    }

    updateAll();
    countdownInterval = setInterval(updateAll, 1000);
}

export function offersPage() {
    return `
        <nav class="navbar">
            <div class="nav-links">
                <a href="#dashboard" class="nav-link">Dashboard</a>
                <a href="#offers" class="nav-link active">Offers</a>
                <a href="#simulation" class="nav-link">Simulation</a>
                <a href="#rewards" class="nav-link">Rewards</a>
                <a href="#history" class="nav-link">History</a>
                <a href="#profile" class="nav-link">Profile</a>
            </div>
        </nav>

        <main class="offers-container">

            <div class="page-header">
                <div class="breadcrumb">
                    <span class="category">CATALOG</span> / <span class="subcategory">ALL OPPORTUNITIES</span>
                </div>
                <h1 class="page-title">Available Offers</h1>
                <p class="page-subtitle">
                    Browse tailored financial products and exclusive limited-time merchant deals.
                </p>
            </div>

            <div class="tabs-bar">
                <div class="tabs-left">
                    <button class="tab-btn active" data-tab="financial">
                        Financial Offers <span class="badge blue">${financialOffers.length}</span>
                    </button>
                    <button class="tab-btn" data-tab="flash">
                        Flash Sales <span class="badge gray">${flashSales.length} LIVE</span>
                    </button>
                </div>
                <div class="status-right">
                    <span class="status-dot"></span>
                    <span class="status-text">UPDATED TODAY</span>
                </div>
            </div>

            <div id="offers-grid" class="offers-grid">
                ${renderOffersGrid('financial')}
            </div>

        </main>
    `;
}

export function attachOffersEvents() {

    const tabButtons = document.querySelectorAll('.tab-btn');
    const grid = document.getElementById('offers-grid');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.getAttribute('data-tab');
            grid.innerHTML = renderOffersGrid(type);

            attachDetailsButtons();

            if (type === 'flash') {
                startCountdowns();
            } else if (countdownInterval) {
                clearInterval(countdownInterval);
            }
        });
    });

    attachDetailsButtons();
}

function attachDetailsButtons() {
    const detailsButtons = document.querySelectorAll('.details-btn');

    detailsButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const offerId = btn.getAttribute('data-offer-id');
            window.location.hash = `#offerDetails/${offerId}`;
        });
    });
}