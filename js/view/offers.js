

export function offersPage() {
    return `
        <div class="offers-page">
            
            
            <header class="navbar">
                
                <nav class="nav-links">
                    <a href="#" class="nav-item">Dashboard</a>
                    <a href="#" class="nav-item active">Offers</a>
                    <a href="#" class="nav-item">Simulation</a>
                    <a href="#" class="nav-item">Rewards</a>
                    <a href="#" class="nav-item">History</a>
                    <a href="#" class="nav-item">Profile</a>
                </nav>

                
            </header>

            
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
                        <button class="tab-btn active">
                            Financial Offers <span class="badge blue">4</span>
                        </button>
                        <button class="tab-btn">
                            Flash Sales <span class="badge gray">2 LIVE</span>
                        </button>
                    </div>
                    <div class="status-right">
                        <span class="status-dot"></span>
                        <span class="status-text">UPDATED TODAY</span>
                    </div>
                </div>

                
                <div class="offers-grid">
                    
                    
                    <div class="offer-card">
                        <div class="card-header">
                            <span class="tag">CREDIT FACILITY</span>
                            <span class="rate">0% APR</span>
                        </div>
                        <h2 class="card-title">Low APR Balance Transfer</h2>
                        <p class="card-description">
                            Consolidate higher-interest revolving balances with zero interest charges during the introductory qualification window.
                        </p>
                        <div class="feature-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>0% Intro APR for 15 Mos</span>
                        </div>
                        <div class="card-footer">
                            <span class="footer-info">No annual membership fee</span>
                            <button class="details-btn">Details</button>
                        </div>
                    </div>

                    
                    <div class="offer-card">
                        <div class="card-header">
                            <span class="tag">SAVINGS</span>
                            <span class="rate">4.85% APY</span>
                        </div>
                        <h2 class="card-title">High-Yield Savings Boost</h2>
                        <p class="card-description">
                            Maximize cash reserves with preferred high-yield rate lock. Zero transfer friction and full FDIC insurance coverage.
                        </p>
                        <div class="feature-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                            <span>4.85% APY Guarantee</span>
                        </div>
                        <div class="card-footer">
                            <span class="footer-info">$500 minimum opening deposit</span>
                            <button class="details-btn">Details</button>
                        </div>
                    </div>

                    
                    <div class="offer-card">
                        <div class="card-header">
                            <span class="tag">AUTO LOAN</span>
                            <span class="rate">-1.50% RATE</span>
                        </div>
                        <h2 class="card-title">Auto Refinance Special</h2>
                        <p class="card-description">
                            Lower current monthly payments by refinancing an existing vehicle loan with fast-track automated approval.
                        </p>
                        <div class="feature-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"/>
                            </svg>
                            <span>Save up to $1,200/yr</span>
                        </div>
                        <div class="card-footer">
                            <span class="footer-info">Terms from 24 to 72 months</span>
                            <button class="details-btn">Details</button>
                        </div>
                    </div>

                    
                    <div class="offer-card">
                        <div class="card-header">
                            <span class="tag">CARD REWARDS</span>
                            <span class="rate">3.0% FIXED</span>
                        </div>
                        <h2 class="card-title">Premier Cashback Card</h2>
                        <p class="card-description">
                            Earn uncompromising returns on enterprise and general expenditure without category ceilings or expirations.
                        </p>
                        <div class="feature-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                            </svg>
                            <span>3% Unlimited Cashback</span>
                        </div>
                        <div class="card-footer">
                            <span class="footer-info">$200 statement credit bonus</span>
                            <button class="details-btn">Details</button>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    `;
}