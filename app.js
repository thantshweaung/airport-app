document.addEventListener('DOMContentLoaded', () => {
    // Load saved language first
    loadLanguage();
    
    const mainContent = document.getElementById('main-content');
    const navItems = document.querySelectorAll('.nav-item');
    const backBtn = document.getElementById('back-btn');
    const headerText = document.querySelector('.header-text');
    const aiAssistantBtn = document.getElementById('ai-assistant-btn');
    const aiChatContainer = document.getElementById('ai-chat-container');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const chatBox = document.getElementById('ai-chat-box');

    const features = {
        home: `
            <div class="home-dashboard">
                <div class="cards-carousel">
                    <div class="carousel-container">
                        <div class="carousel-track">
                            <div class="carousel-slide active">
                                <div class="feature-card flight-status-card">
                                    <h2><span class="material-symbols-outlined">flight_takeoff</span> <span data-translate="checkFlightStatus">Check Flight Status</span></h2>
                                    <form id="flight-status-form">
                                        <div class="form-group">
                                            <input type="text" id="flight-number-search" placeholder="Enter Flight Number, e.g., 8M 231">
                                        </div>
                                        <button type="submit" class="btn">Search</button>
                                    </form>
                                </div>
                            </div>
                            
                            <div class="carousel-slide">
                                <div class="feature-card promotions-card">
                                    <div class="promotion-header">
                                        <div class="promotion-icon">
                                            <span class="material-symbols-outlined">campaign</span>
                                        </div>
                                        <div class="promotion-content">
                                            <h2 data-translate="promotions">Special Offer</h2>
                                            <p class="promotion-title">10% Off Restaurant Dining</p>
                                            <p class="promotion-description">Enjoy exclusive discounts at select restaurants when you pay with your app wallet!</p>
                                        </div>
                                    </div>
                                    <div class="promotion-footer">
                                        <div class="promotion-badge">
                                            <span class="material-symbols-outlined">local_offer</span>
                                            <span>Limited Time</span>
                                        </div>
                                        <button class="btn promotion-btn" data-translate="learnMore">Learn More</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="carousel-slide">
                                <div class="feature-card ad-card">
                                    <div class="ad-badge">Ad</div>
                                    <h3>Fast & Reliable Airport Taxi</h3>
                                    <p>Book your ride to the city instantly. Safe, comfortable, and fixed prices.</p>
                                    <button class="btn ad-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="carousel-indicators">
                        <span class="indicator active" data-slide="0"></span>
                        <span class="indicator" data-slide="1"></span>
                        <span class="indicator" data-slide="2"></span>
                    </div>
                </div>

                <div class="unified-services-grid">
                    <div class="service-item primary" data-feature="wallet">
                        <span class="material-symbols-outlined">account_balance_wallet</span>
                        <span>Wallet</span>
                        <small>Manage payments</small>
                    </div>
                    <div class="service-item" data-feature="parking">
                        <span class="material-symbols-outlined">directions_car</span>
                        <span>Parking</span>
                        <small>Find spots</small>
                    </div>
                    <div class="service-item" data-feature="rewards">
                        <span class="material-symbols-outlined">military_tech</span>
                        <span>Rewards</span>
                        <small>Earn points</small>
                    </div>
                    <div class="service-item" data-feature="arrival_customs">
                        <span class="material-symbols-outlined">flight_land</span>
                        <span>Arrival</span>
                        <small>Customs form</small>
                    </div>
                    <div class="service-item" data-feature="ev_charging">
                        <span class="material-symbols-outlined">ev_station</span>
                        <span>EV Charge</span>
                        <small>Electric vehicles</small>
                    </div>
                    <div class="service-item" data-feature="carbon_offset">
                        <span class="material-symbols-outlined">public</span>
                        <span>Carbon</span>
                        <small>Offset emissions</small>
                    </div>
                    <div class="service-item" data-feature="map">
                        <span class="material-symbols-outlined">map</span>
                        <span>Airport Map</span>
                        <small>Navigate</small>
                    </div>
                    <div class="service-item" data-feature="shops">
                        <span class="material-symbols-outlined">storefront</span>
                        <span>Shops</span>
                        <small>Browse stores</small>
                    </div>
                    <div class="service-item" data-feature="lounge">
                        <span class="material-symbols-outlined">deck</span>
                        <span>Lounge</span>
                        <small>Book access</small>
                    </div>
                </div>
            </div>
        `,
        flights: `
            <div class="feature-card flight-status-card">
                <h2><span class="material-symbols-outlined">flight_takeoff</span> Check Flight Status</h2>
                <form id="flight-status-form">
                    <div class="form-group">
                        <input type="text" id="flight-number-search" placeholder="Enter Flight Number, e.g., 8M 231">
                    </div>
                    <button type="submit" class="btn">Search</button>
                </form>
            </div>
        `,
        arrival_customs: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">flight_land</span> Digital Arrival Card</h2>
                <div class="form-controls">
                    <button type="button" class="btn btn-secondary" id="autofill-btn">
                        <span class="material-symbols-outlined">auto_fix_high</span>
                        Autofill
                    </button>
                    <button type="button" class="btn btn-secondary" id="clear-form-btn">
                        <span class="material-symbols-outlined">clear_all</span>
                        Clear
                    </button>
                </div>
                <form id="arrival-card-form">
                    <div class="form-group">
                        <label for="applicant-type">Who is filling this form?</label>
                        <select id="applicant-type" required>
                            <option value="">Select...</option>
                            <option value="me">Me (I am the traveler)</option>
                            <option value="other">Other person (I am filling for someone else)</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="family-name">Family Name</label>
                            <input type="text" id="family-name" required>
                        </div>
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" required>
                        </div>
                        <div class="form-group">
                            <label for="middle-name">Middle Name</label>
                            <input type="text" id="middle-name">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="dob">Date of Birth</label>
                            <input type="date" id="dob" required>
                        </div>
                        <div class="form-group">
                            <label for="sex">Sex</label>
                            <select id="sex" required>
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="nationality">Nationality</label>
                        <input type="text" id="nationality" required>
                    </div>
                    <div class="form-group">
                        <label for="occupation">Occupation</label>
                        <input type="text" id="occupation" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="passport">Passport Number</label>
                            <input type="text" id="passport" required>
                        </div>
                        <div class="form-group">
                            <label for="passport-issue-place">Place of Issue (Passport)</label>
                            <input type="text" id="passport-issue-place" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passport-issue-date">Date of Issue (Passport)</label>
                        <input type="date" id="passport-issue-date" required>
                    </div>
                    <div class="form-group">
                        <label for="expiry-date">Date of Expiry (Passport)</label>
                        <input type="date" id="expiry-date" required>
                    </div>
                    <div class="form-group">
                        <label for="visa-number">Visa Number (if applicable)</label>
                        <input type="text" id="visa-number">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="visa-issue-place">Place of Issue (Visa)</label>
                            <input type="text" id="visa-issue-place">
                        </div>
                        <div class="form-group">
                            <label for="visa-issue-date">Date of Issue (Visa)</label>
                            <input type="date" id="visa-issue-date">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="from-origin">From (City/Country of Embarkation)</label>
                        <input type="text" id="from-origin" required>
                    </div>
                    <div class="form-group">
                        <label for="flight-number">Flight Number</label>
                        <input type="text" id="flight-number" required>
                    </div>
                    <div class="form-group">
                        <label for="first-trip">Is this your First Trip To Myanmar?</label>
                        <select id="first-trip" required>
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="group-tour">Are you Travelling on a Group Tour?</label>
                        <select id="group-tour" required>
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="length-of-stay">Length of Stay (in days)</label>
                        <input type="number" id="length-of-stay" required min="1">
                    </div>
                    <div class="form-group">
                        <label for="visit-purpose">Purpose of Visit</label>
                        <select id="visit-purpose" required>
                            <option value="">Select...</option>
                            <option value="tourist">Tourist</option>
                            <option value="holiday">Holiday</option>
                            <option value="business">Business</option>
                            <option value="meeting">Meeting/Conference</option>
                            <option value="education">Education</option>
                            <option value="transit">Transit</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="country-residence">Country of Residence</label>
                        <input type="text" id="country-residence" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address in Myanmar (Hotel)</label>
                        <input type="text" id="address" required>
                    </div>
                    <div class="form-group">
                        <label for="id-card-number">ID Card Number</label>
                        <input type="text" id="id-card-number">
                    </div>
                    <div class="form-group">
                        <label for="father-name">Father's Name</label>
                        <input type="text" id="father-name">
                    </div>
                    <h3>Customs Declaration</h3>
                    <div class="form-group">
                        <label for="prohibited-goods">Are you bringing in any prohibited or restricted goods?</label>
                        <select id="prohibited-goods" required>
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="currency-declaration">Are you carrying currency or monetary instruments equal to or exceeding $10,000 USD (or equivalent)?</label>
                        <select id="currency-declaration" required>
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="goods-value">Value of goods to declare (if any)</label>
                        <input type="number" id="goods-value" placeholder="Enter value in USD">
                    </div>
                    <div class="form-group">
                        <label for="signature-name">Signature (Type Full Name)</label>
                        <input type="text" id="signature-name" required>
                    </div>
                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        `,
        map: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">map</span> Airport Map</h2>
                <div class="map-filters">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="gates">Gates</button>
                    <button class="filter-btn" data-filter="food">Food & Dining</button>
                    <button class="filter-btn" data-filter="shops">Shops</button>
                    <button class="filter-btn" data-filter="restrooms">Restrooms</button>
                </div>
                <div class="map-container">
                    <iframe
                        width="100%"
                        height="400"
                        frameborder="0"
                        style="border:0; border-radius: var(--border-radius);"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2000000000005!2d-73.98765432345678!3d40.75800000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        `,

        parking: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">directions_car</span> Car Park Availability</h2>
                <p>Real-time parking status will be shown here.</p>
                <p><strong>Terminal 1:</strong> 120/200 spots available</p>
                <p><strong>Terminal 2:</strong> 80/150 spots available</p>
            </div>
        `,
        ev_charging: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">ev_station</span> EV Charging</h2>
                <div class="ev-station-details">
                    <div>
                        <span>Location</span>
                        <strong>T1, Zone A</strong>
                    </div>
                    <div>
                        <span>Available</span>
                        <strong>3 / 5</strong>
                    </div>
                     <div>
                        <span>Price</span>
                        <strong>K 500/kWh</strong>
                    </div>
                </div>
                <form id="ev-payment-form">
                    <div class="form-group">
                        <label for="charge-amount">Amount to Charge (kWh)</label>
                        <input type="number" id="charge-amount" required placeholder="e.g., 10">
                    </div>
                    <div class="form-group">
                        <label>Payment Method</label>
                        <select>
                            <option>Wallet (Balance: K 25,000)</option>
                            <option>Credit/Debit Card</option>
                        </select>
                    </div>
                    <button type="submit" class="btn">Pay & Start Charging</button>
                </form>
            </div>
        `,
        carbon_offset: `
            <div class="feature-card carbon-details">
                <h2><span class="material-symbols-outlined">public</span> Carbon Offset Program</h2>
                <p>Offset the carbon footprint of your flight. Calculate your emissions and contribute to environmental projects.</p>
                <form id="carbon-offset-form">
                    <div class="form-group">
                        <label for="departure">Departure Airport</label>
                        <input type="text" id="departure" value="YGN" readonly>
                    </div>
                    <div class="form-group">
                        <label for="arrival">Arrival Airport</label>
                        <input type="text" id="arrival" placeholder="e.g., BKK">
                    </div>
                    <button type="submit" class="btn">Calculate & Offset</button>
                </form>
            </div>
        `,
        top_up: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">add_card</span> Top Up Wallet</h2>
                <form id="top-up-form">
                    <div class="form-group">
                        <label for="top-up-amount">Amount (MMK)</label>
                        <input type="number" id="top-up-amount" placeholder="Enter amount" required>
                    </div>
                    <div class="form-group">
                        <label>Choose Payment Method</label>
                        <div class="payment-methods">
                            <div class="payment-method" data-method="kbzpay">
                                <img src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4=w240-h480-rw" alt="KBZPay">
                                <span>KBZPay</span>
                            </div>
                            <div class="payment-method" data-method="wavepay">
                                <img src="https://play-lh.googleusercontent.com/RBioijJkvKAdlGQUaKuKZ4N_ya2k6UCgW47r3cksuDJWl6qn8g3VOd2h7aNNgYmerBo=w240-h480-rw" alt="WavePay">
                                <span>WavePay</span>
                            </div>
                            <div class="payment-method" data-method="cbpay">
                                <img src="https://play-lh.googleusercontent.com/ErPz7wvjl-tmKkfsTDtxz4XepVocji0Mo0k9Somq7ydxA7y49JHU9EnGMUGDUY9Nveq-=w240-h480-rw" alt="CBPay">
                                <span>CBPay</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn">Proceed to Payment</button>
                </form>
            </div>
        `,
        wallet: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">account_balance_wallet</span> My Wallet</h2>
                <div class="wallet-balance">
                    <span class="balance-label">Current Balance</span>
                    <div class="balance-amount">K 25,000</div>
                </div>
                <div class="wallet-actions">
                    <div class="action-btn" id="top-up-btn">
                        <span class="material-symbols-outlined">add_card</span>
                        <span>Top Up</span>
                    </div>
                    <div class="action-btn" id="pay-btn">
                        <span class="material-symbols-outlined">qr_code_scanner</span>
                        <span>Pay</span>
                    </div>
                    <div class="action-btn" id="mmqr-pay-btn">
                        <span class="material-symbols-outlined">qr_code</span>
                        <span>MMQR Pay</span>
                    </div>
                </div>
                <div class="transaction-list">
                    <h3 class="list-header">Recent Transactions</h3>
                    <div class="transaction-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">coffee</span>
                            <div>
                                <div>Gloria Jean's</div>
                                <small>Today</small>
                            </div>
                        </div>
                        <div class="item-amount debit">- K 5,500</div>
                    </div>
                    <div class="transaction-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">add_card</span>
                            <div>
                                <div>Top Up</div>
                                <small>Yesterday</small>
                            </div>
                        </div>
                        <div class="item-amount credit">+ K 30,000</div>
                    </div>
                </div>
            </div>
        `,
        mmqr_payment: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">qr_code</span> MMQR Payment</h2>
                <div class="mmqr-container">
                    <img src="https://via.placeholder.com/200x200?text=MMQR+Code+Placeholder" alt="MMQR Code" class="qr-code-placeholder">
                    <p>Scan this QR code to pay</p>
                    <div class="form-group">
                        <label for="mmqr-amount">Amount (K)</label>
                        <input type="number" id="mmqr-amount" placeholder="Enter amount" required>
                    </div>
                    <button class="btn">Generate QR / Pay</button>
                </div>
            </div>
        `,
        profile: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">person</span> User Profile</h2>
                <div class="profile-info">
                    <img src="https://dummyimage.com/150x150/000/fff&text=TSA" alt="User Avatar" class="avatar">
                    <h3>Thant Shwe Aung</h3>
                    <p>thantshweaung@example.com</p>
                    <span class="membership-tier">Gold Member</span>
                </div>
                <div class="profile-actions">
                    <div class="profile-action-item">
                        <span class="material-symbols-outlined">history</span>
                        <span>View Activity</span>
                    </div>
                    <div class="profile-action-item">
                        <span class="material-symbols-outlined">logout</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        `,

        rewards: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">military_tech</span> Reward Points</h2>
                <div class="points-balance">
                    <span class="balance-label">Your Points</span>
                    <div class="balance-amount">1,250</div>
                </div>
                <div class="reward-list">
                    <h3 class="list-header">Available Rewards</h3>
                    <div class="reward-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">coffee</span>
                            <div>
                                <div>Free Coffee</div>
                                <small>Redeem for 200 points</small>
                            </div>
                        </div>
                        <button class="btn">Redeem</button>
                    </div>
                    <div class="reward-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">local_mall</span>
                            <div>
                                <div>$5 Shopping Voucher</div>
                                <small>Redeem for 500 points</small>
                            </div>
                        </div>
                        <button class="btn">Redeem</button>
                    </div>
                    <div class="reward-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">confirmation_number</span>
                            <div>
                                <div>Lounge Access</div>
                                <small>Redeem for 1000 points</small>
                            </div>
                        </div>
                        <button class="btn">Redeem</button>
                    </div>
                </div>
            </div>
        `,
        settings: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">settings</span> Settings</h2>
                <div class="settings-list">
                    <div class="setting-item">
                        <div>
                            <h4>Push Notifications</h4>
                            <p>Receive updates on flight status and promotions.</p>
                        </div>
                        <div class="toggle-switch">
                            <input type="checkbox" id="push-notifications" checked>
                            <label for="push-notifications"></label>
                        </div>
                    </div>
                    <div class="setting-item">
                        <div>
                            <h4>Email Notifications</h4>
                            <p>Get booking confirmations and newsletters.</p>
                        </div>
                        <div class="toggle-switch">
                            <input type="checkbox" id="email-notifications" checked>
                            <label for="email-notifications"></label>
                        </div>
                    </div>
                    <div class="setting-item">
                        <div>
                            <h4>Dark Mode</h4>
                            <p>Switch to a dark theme.</p>
                        </div>
                        <div class="toggle-switch">
                            <input type="checkbox" id="dark-mode">
                            <label for="dark-mode"></label>
                        </div>
                    </div>
                </div>
            </div>
        `,
        lounge: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">deck</span> Lounge Booking</h2>
                <form id="lounge-booking-form">
                    <div class="form-group">
                        <label for="lounge-select">Select Lounge</label>
                        <select id="lounge-select" required>
                            <option value="">Select a lounge...</option>
                            <option value="cip">CIP Lounge</option>
                            <option value="business">Business Class Lounge</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="booking-date">Date</label>
                        <input type="date" id="booking-date" required>
                    </div>
                    <div class="form-group">
                        <label for="booking-time">Time</label>
                        <input type="time" id="booking-time" required>
                    </div>
                    <button type="submit" class="btn">Book Now</button>
                </form>
                <div class="reservation-list">
                    <h3 class="list-header">Your Reservations</h3>
                    <div class="reservation-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">deck</span>
                            <div>
                                <div>CIP Lounge</div>
                                <small>2025-10-01, 14:00</small>
                            </div>
                        </div>
                        <div class="item-status confirmed">Confirmed</div>
                    </div>
                </div>
            </div>
        `,
        more: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">more_horiz</span> More</h2>
                <div class="home-grid">
                    <div class="home-item" data-feature="lounge">
                        <span class="material-symbols-outlined">deck</span>
                        <span>Lounge</span>
                    </div>
                    <div class="home-item" data-feature="profile">
                        <span class="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </div>
                    <div class="home-item" data-feature="settings">
                        <span class="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        `,
        settings: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">settings</span> Settings</h2>
                <div class="settings-section">
                    <div class="setting-item">
                        <div class="setting-info">
                            <span class="material-symbols-outlined">language</span>
                            <div class="setting-details">
                                <h3 data-translate="language">Language</h3>
                                <p data-translate="selectLanguage">Select your preferred language</p>
                            </div>
                        </div>
                        <div class="setting-value">
                            <span id="current-language">English</span>
                        </div>
                    </div>
                    
                    <div class="language-selector">
                        <div class="language-options">
                            <button class="language-option" data-lang="en">
                                <span class="flag">🇺🇸</span>
                                <span class="lang-name">English</span>
                            </button>
                            <button class="language-option" data-lang="zh">
                                <span class="flag">🇨🇳</span>
                                <span class="lang-name">中文 (Chinese)</span>
                            </button>
                            <button class="language-option" data-lang="ja">
                                <span class="flag">🇯🇵</span>
                                <span class="lang-name">日本語 (Japanese)</span>
                            </button>
                            <button class="language-option" data-lang="ko">
                                <span class="flag">🇰🇷</span>
                                <span class="lang-name">한국어 (Korean)</span>
                            </button>
                            <button class="language-option" data-lang="th">
                                <span class="flag">🇹🇭</span>
                                <span class="lang-name">ไทย (Thai)</span>
                            </button>
                            <button class="language-option" data-lang="my">
                                <span class="flag">🇲🇲</span>
                                <span class="lang-name">မြန်မာ (Myanmar)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    function loadFeature(featureName) {
        if (featureName === 'shops') {
            loadShops();
        } else {
            mainContent.innerHTML = features[featureName];
        }
        
        if (featureName === 'home') {
            if (backBtn.style.display !== 'none') {
                backBtn.classList.add('hide');
                setTimeout(() => {
                    backBtn.style.display = 'none';
                    backBtn.classList.remove('hide');
                }, 300);
            }
            headerText.style.textAlign = 'center';
        } else {
            if (backBtn.style.display === 'none') {
                backBtn.style.display = 'flex';
                backBtn.classList.add('show');
                setTimeout(() => {
                    backBtn.classList.remove('show');
                }, 400);
            }
            headerText.style.textAlign = 'left';
        }

        // Add event listeners
        const arrivalForm = document.getElementById('arrival-card-form');
        if(arrivalForm) {
            arrivalForm.addEventListener('submit', (e) => { 
                e.preventDefault(); 
                saveArrivalCardData();
                showAlert('Arrival card submitted!', 'Submission Successful', 'success'); 
            });
        }

        // Autofill and Clear buttons
        const autofillBtn = document.getElementById('autofill-btn');
        if(autofillBtn) autofillBtn.addEventListener('click', autofillArrivalCard);

        const clearFormBtn = document.getElementById('clear-form-btn');
        if(clearFormBtn) clearFormBtn.addEventListener('click', clearArrivalCard);

        const evPaymentForm = document.getElementById('ev-payment-form');
        if(evPaymentForm) evPaymentForm.addEventListener('submit', (e) => { e.preventDefault(); showAlert('Payment successful! Charging started.', 'Payment Confirmed', 'success'); });

        const carbonForm = document.getElementById('carbon-offset-form');
        if(carbonForm) carbonForm.addEventListener('submit', (e) => { e.preventDefault(); showAlert('Thank you for your contribution!', 'Carbon Offset', 'success'); });

        const customDeclarationForm = document.getElementById('custom-declaration-form');
        if(customDeclarationForm) {
            customDeclarationForm.addEventListener('submit', (e) => { e.preventDefault(); showAlert('Customs Declaration Submitted!', 'Declaration Submitted', 'success'); });

            const currencySelect = document.getElementById('cd-currency');
            const currencyAmount = document.getElementById('cd-currency-amount');
            currencySelect.addEventListener('change', () => {
                if (currencySelect.value === 'yes') {
                    currencyAmount.style.display = 'block';
                } else {
                    currencyAmount.style.display = 'none';
                }
            });

            const redChannelBtn = document.querySelector('.red-channel');
            const greenChannelBtn = document.querySelector('.green-channel');

            redChannelBtn.addEventListener('click', () => {
                showAlert('Please proceed to the Red Channel for inspection.', 'Customs Information', 'info');
            });

            greenChannelBtn.addEventListener('click', () => {
                showAlert('You may proceed through the Green Channel.', 'Customs Information', 'success');
            });
        }

        const topUpBtn = document.getElementById('top-up-btn');
        if(topUpBtn) topUpBtn.addEventListener('click', () => loadFeature('top_up'));

        const topUpForm = document.getElementById('top-up-form');
        if(topUpForm) topUpForm.addEventListener('submit', (e) => { 
            e.preventDefault(); 
            const amount = document.getElementById('top-up-amount').value;
            const selectedPayment = document.querySelector('.payment-method.active');
            if (amount && selectedPayment) {
                const method = selectedPayment.dataset.method;
                showAlert(`Proceeding to pay ${amount} MMK with ${method}`, 'Payment Processing', 'info');
            } else {
                showAlert('Please enter an amount and select a payment method.', 'Missing Information', 'warning');
            }
        });

        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                method.classList.add('active');
            });
        });

        const payBtn = document.getElementById('pay-btn');
        if(payBtn) payBtn.addEventListener('click', () => showAlert('Pay function coming soon!', 'Payment', 'info'));

        const mmqrPayBtn = document.getElementById('mmqr-pay-btn');
        if(mmqrPayBtn) mmqrPayBtn.addEventListener('click', () => {
            loadFeature('mmqr_payment');
            updateNav('mmqr_payment');
        });

        const generateQrBtn = document.querySelector('#mmqr-payment .btn');
        if(generateQrBtn) generateQrBtn.addEventListener('click', () => showAlert('MMQR payment initiated!', 'Payment Success', 'success'));

        const flightStatusForm = document.getElementById('flight-status-form');
        if(flightStatusForm) {
            flightStatusForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const flightNumber = document.getElementById('flight-number-search').value;
                if (flightNumber) {
                    showFlightStatus(flightNumber);
                }
            });
        }

        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            item.addEventListener('click', () => {
                const feature = item.getAttribute('data-feature');
                loadFeature(feature);
                updateNav(feature);
            });
        });

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                showAlert(`Filtering by: ${btn.dataset.filter}`, 'Filter Applied', 'info');
            });
        });

        const loungeBookingForm = document.getElementById('lounge-booking-form');
        if(loungeBookingForm) loungeBookingForm.addEventListener('submit', (e) => { e.preventDefault(); showAlert('Lounge booked successfully!', 'Booking Confirmed', 'success'); });

        const promotionBtn = document.querySelector('.promotion-btn');
        if(promotionBtn) promotionBtn.addEventListener('click', () => {
            showAlert('Redirecting to promotion details...', 'Promotion', 'info');
        });

        // Shops functionality
        initShopsFeatures();

        // Carousel functionality
        initCarousel();
        
        // Language switcher functionality
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                
                // Update active state
                languageOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Show success message
                showAlert(`${languageNames[lang]} language has been selected!`, 'Language Changed', 'success');
            });
        });
    }

    function showFlightStatus(flightNumber) {
        const flightCard = document.querySelector('.flight-status-card');
        let resultContainer = document.querySelector('.flight-status-result');
        if (!resultContainer) {
            resultContainer = document.createElement('div');
            resultContainer.className = 'flight-status-result';
            flightCard.appendChild(resultContainer);
        }

        resultContainer.innerHTML = `<div class="loading-spinner"><div class="spinner"></div></div>`;

        setTimeout(() => {
            resultContainer.innerHTML = `
                <div class="flight-info-header">
                    <h3>${flightNumber.toUpperCase()}</h3>
                    <span class="flight-status">On Time</span>
                </div>
                <div class="flight-info-details">
                    <div>
                        <strong>MDL</strong>
                        <span>Mandalay</span>
                    </div>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    <div>
                        <strong>NYU</strong>
                        <span>Nyaung U</span>
                    </div>
                </div>
                <hr>
                <div class="flight-info-footer">
                    <span><strong>Gate:</strong> 3A</span> | <span><strong>Departs:</strong> 14:30</span>
                </div>
            `;
        }, 1500);
    }

    function updateNav(featureName) {
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-feature') === featureName);
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const feature = item.getAttribute('data-feature');
            loadFeature(feature);
            updateNav(feature);
        });
    });

    backBtn.addEventListener('click', () => {
        loadFeature('home');
        updateNav('home');
    });

    // AI Assistant Logic

    aiAssistantBtn.addEventListener('click', () => {
        aiChatContainer.classList.add('active');
    });

    closeChatBtn.addEventListener('click', () => {
        aiChatContainer.classList.remove('active');
    });

    sendChatBtn.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatBtn.click();
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let botMessage = "I'm sorry, I don't understand. I can help with flight information, directions, and general airport questions.";

        if (lowerCaseMessage.includes('flight')) {
            botMessage = "Sure, I can help with that. What is the flight number?";
        } else if (lowerCaseMessage.includes('direction') || lowerCaseMessage.includes('where')) {
            botMessage = "I can provide directions. Where would you like to go?";
        } else if (lowerCaseMessage.includes('gate')) {
            botMessage = "Please provide your flight number, and I can look up the gate information for you.";
        } else if (lowerCaseMessage.includes('wifi')) {
            botMessage = "The airport's free WiFi network is 'YGN-Airport-Free-WiFi'. No password is required.";
        } else if (lowerCaseMessage.includes('lounge')) {
            botMessage = "The CIP lounge is located on the second floor of the international terminal. You can book access through the app.";
        }

        setTimeout(() => {
            addMessage(botMessage, 'bot');
        }, 500);
    }

    function loadAnnouncements() {
        const announcementContainer = document.getElementById('announcement-container');
        // Dummy announcement
        const announcement = {
            title: 'Terminal 1 Renovation',
            message: 'Terminal 1 will be closed for renovation from 1st October to 31st December.'
        };

        if (announcement) {
            announcementContainer.innerHTML = `<marquee><strong>${announcement.title}:</strong> ${announcement.message}</marquee>`;
            announcementContainer.style.display = 'block';
        } else {
            announcementContainer.style.display = 'none';
        }
    }

    // Modal and Cart Logic
    const productModal = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalShopName = document.getElementById('modal-shop-name');
    const modalProductList = document.getElementById('modal-product-list');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');

    let cart = [];
    let products = [];

    async function openModal(shopName) {
        modalShopName.textContent = shopName;
        modalProductList.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';
        productModal.style.display = 'block';

        if (products.length === 0) {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                products = data.products;
            } catch (error) {
                console.error('Error fetching products:', error);
                modalProductList.innerHTML = '<p>Could not load products. Please try again later.</p>';
                return;
            }
        }

        modalProductList.innerHTML = ''; // Clear loading spinner

        // Display a selection of products (e.g., first 6)
        const productsToShow = products.slice(0, 6);

        productsToShow.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p>K ${product.price.toLocaleString()}</p>
                        <button class="add-to-cart-btn" data-product-name="${product.title}" data-product-price="${product.price}">Add to Cart</button>
                    </div>
                </div>
            `;
            modalProductList.innerHTML += productCard;
        });
    }

    function updateCart() {
        cartCount.textContent = cart.length;
    }

    mainContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-products-btn')) {
            const shopName = e.target.dataset.shop;
            openModal(shopName);
        }
    });

    modalProductList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productName = e.target.dataset.productName;
            const productPrice = e.target.dataset.productPrice;
            cart.push({ name: productName, price: productPrice });
            updateCart();
            showAlert(`${productName} added to cart!`, 'Cart Updated', 'success');
        }
    });

    closeModalBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == productModal) {
            productModal.style.display = 'none';
        }
    });

    cartIcon.addEventListener('click', () => {
        if (cart.length === 0) {
            showAlert('Your cart is empty.', 'Empty Cart', 'info');
            return;
        }

        let cartSummary = 'Items in your cart:\n\n';
        cart.forEach(item => {
            cartSummary += `${item.name} - ${item.price}\n`;
        });

        showAlert(cartSummary, 'Shopping Cart', 'info');
    });

    // Shops functionality
    function initShopsFeatures() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const shopCards = document.querySelectorAll('.shop-card');
        const searchInput = document.getElementById('shops-search');
        const searchBtn = document.querySelector('.search-btn');
        const aiHelpBtn = document.querySelector('.ai-help-btn');

        // Filter functionality
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.dataset.filter;
                
                // Filter shop cards
                shopCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'slideUp 0.5s ease-in-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                
                shopCards.forEach(card => {
                    const shopName = card.querySelector('.shop-name').textContent.toLowerCase();
                    const shopCategory = card.querySelector('.shop-category').textContent.toLowerCase();
                    
                    if (shopName.includes(searchTerm) || shopCategory.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const searchTerm = searchInput.value.toLowerCase();
                
                shopCards.forEach(card => {
                    const shopName = card.querySelector('.shop-name').textContent.toLowerCase();
                    const shopCategory = card.querySelector('.shop-category').textContent.toLowerCase();
                    
                    if (shopName.includes(searchTerm) || shopCategory.includes(searchTerm)) {
                        card.style.display = 'block';
                        card.style.animation = 'slideUp 0.5s ease-in-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        // AI Help button
        if (aiHelpBtn) {
            aiHelpBtn.addEventListener('click', () => {
                // Trigger AI assistant
                const aiAssistantBtn = document.getElementById('ai-assistant-btn');
                if (aiAssistantBtn) {
                    aiAssistantBtn.click();
                }
            });
        }

        // Quick view buttons
        const quickViewBtns = document.querySelectorAll('.quick-view-btn');
        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const shopName = btn.dataset.shop;
                showAlert(`Quick view for ${shopName} - Feature coming soon!`, 'Quick View', 'info');
            });
        });
    }

    // Carousel functionality
    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const indicators = document.querySelectorAll('.indicator');
        
        if (!track || !indicators.length) return;
        
        let currentSlide = 0;
        const totalSlides = indicators.length;
        
        function updateCarousel() {
            const translateX = -currentSlide * 33.333;
            track.style.transform = `translateX(${translateX}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Enhanced Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        let startTime = 0;
        
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            currentX = startX;
            isDragging = true;
            startTime = Date.now();
            track.style.transition = 'none';
        });
        
        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            const baseTranslate = -currentSlide * 33.333;
            const currentTranslate = baseTranslate + (diffX / track.offsetWidth) * 100;
            
            // Limit the translation to prevent over-scrolling
            const minTranslate = -((totalSlides - 1) * 33.333);
            const maxTranslate = 0;
            const limitedTranslate = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate));
            
            track.style.transform = `translateX(${limitedTranslate}%)`;
        });
        
        track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const diffX = endX - startX;
            const diffTime = Date.now() - startTime;
            const velocity = Math.abs(diffX) / diffTime;
            
            // Re-enable transitions
            track.style.transition = 'transform 0.5s ease-in-out';
            
            // Determine if we should change slides based on distance and velocity
            const minSwipeDistance = 30;
            const minVelocity = 0.3;
            
            if (Math.abs(diffX) > minSwipeDistance || velocity > minVelocity) {
                if (diffX > 0) {
                    // Swipe right - go to previous slide
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                } else {
                    // Swipe left - go to next slide
                    currentSlide = (currentSlide + 1) % totalSlides;
                }
            }
            
            updateCarousel();
        });
        
        // Mouse drag support for desktop testing
        track.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startX = e.clientX;
            currentX = startX;
            isDragging = true;
            startTime = Date.now();
            track.style.transition = 'none';
            track.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            currentX = e.clientX;
            const diffX = currentX - startX;
            const baseTranslate = -currentSlide * 33.333;
            const currentTranslate = baseTranslate + (diffX / track.offsetWidth) * 100;
            
            const minTranslate = -((totalSlides - 1) * 33.333);
            const maxTranslate = 0;
            const limitedTranslate = Math.max(minTranslate, Math.min(maxTranslate, currentTranslate));
            
            track.style.transform = `translateX(${limitedTranslate}%)`;
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.clientX;
            const diffX = endX - startX;
            const diffTime = Date.now() - startTime;
            const velocity = Math.abs(diffX) / diffTime;
            
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.cursor = 'grab';
            
            const minSwipeDistance = 30;
            const minVelocity = 0.3;
            
            if (Math.abs(diffX) > minSwipeDistance || velocity > minVelocity) {
                if (diffX > 0) {
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                } else {
                    currentSlide = (currentSlide + 1) % totalSlides;
                }
            }
            
            updateCarousel();
        });
    }

    // Arrival Card Autofill Data Storage - Multiple realistic profiles
    const arrivalCardProfiles = {
        profile1: {
            applicantType: 'me',
            familyName: 'Smith',
            firstName: 'John',
            middleName: 'Michael',
            dob: '1990-05-15',
            sex: 'male',
            nationality: 'American',
            occupation: 'Software Engineer',
            passport: 'A12345678',
            passportIssuePlace: 'New York',
            passportIssueDate: '2020-01-15',
            expiryDate: '2030-01-15',
            visaNumber: 'V987654321',
            visaIssuePlace: 'Yangon',
            visaIssueDate: '2024-01-01',
            fromOrigin: 'New York, USA',
            flightNumber: 'AA123',
            firstTrip: 'no',
            groupTour: 'no',
            lengthOfStay: '7',
            visitPurpose: 'tourist',
            countryResidence: 'United States',
            address: 'Hotel Yangon, Downtown',
            idCardNumber: 'ID123456789',
            fatherName: 'Robert Smith',
            prohibitedGoods: 'no',
            currencyDeclaration: 'no',
            goodsValue: '',
            signatureName: 'John Michael Smith'
        },
        profile2: {
            applicantType: 'other',
            familyName: 'Johnson',
            firstName: 'Sarah',
            middleName: 'Elizabeth',
            dob: '1985-12-03',
            sex: 'female',
            nationality: 'British',
            occupation: 'Marketing Manager',
            passport: 'GB987654321',
            passportIssuePlace: 'London',
            passportIssueDate: '2019-06-20',
            expiryDate: '2029-06-20',
            visaNumber: 'V123456789',
            visaIssuePlace: 'Yangon',
            visaIssueDate: '2024-02-15',
            fromOrigin: 'London, UK',
            flightNumber: 'BA456',
            firstTrip: 'yes',
            groupTour: 'no',
            lengthOfStay: '14',
            visitPurpose: 'business',
            countryResidence: 'United Kingdom',
            address: 'Sule Shangri-La Hotel, Yangon',
            idCardNumber: 'GB123456789',
            fatherName: 'David Johnson',
            prohibitedGoods: 'no',
            currencyDeclaration: 'yes',
            goodsValue: '15000',
            signatureName: 'Sarah Elizabeth Johnson'
        },
        profile3: {
            applicantType: 'me',
            familyName: 'Chen',
            firstName: 'Wei',
            middleName: 'Ming',
            dob: '1992-08-22',
            sex: 'male',
            nationality: 'Chinese',
            occupation: 'Business Analyst',
            passport: 'CN456789123',
            passportIssuePlace: 'Beijing',
            passportIssueDate: '2021-03-10',
            expiryDate: '2031-03-10',
            visaNumber: 'V456789123',
            visaIssuePlace: 'Yangon',
            visaIssueDate: '2024-03-01',
            fromOrigin: 'Beijing, China',
            flightNumber: 'CA789',
            firstTrip: 'no',
            groupTour: 'yes',
            lengthOfStay: '5',
            visitPurpose: 'meeting',
            countryResidence: 'China',
            address: 'Kandawgyi Palace Hotel, Yangon',
            idCardNumber: 'CN987654321',
            fatherName: 'Li Chen',
            prohibitedGoods: 'no',
            currencyDeclaration: 'no',
            goodsValue: '',
            signatureName: 'Wei Ming Chen'
        },
        profile4: {
            applicantType: 'other',
            familyName: 'Tanaka',
            firstName: 'Yuki',
            middleName: 'Hiroshi',
            dob: '1988-11-17',
            sex: 'male',
            nationality: 'Japanese',
            occupation: 'Tour Guide',
            passport: 'JP789123456',
            passportIssuePlace: 'Tokyo',
            passportIssueDate: '2022-09-05',
            expiryDate: '2032-09-05',
            visaNumber: 'V789123456',
            visaIssuePlace: 'Yangon',
            visaIssueDate: '2024-04-10',
            fromOrigin: 'Tokyo, Japan',
            flightNumber: 'JL012',
            firstTrip: 'yes',
            groupTour: 'yes',
            lengthOfStay: '10',
            visitPurpose: 'education',
            countryResidence: 'Japan',
            address: 'The Strand Hotel, Yangon',
            idCardNumber: 'JP456789123',
            fatherName: 'Takeshi Tanaka',
            prohibitedGoods: 'no',
            currencyDeclaration: 'no',
            goodsValue: '',
            signatureName: 'Yuki Hiroshi Tanaka'
        },
        profile5: {
            applicantType: 'me',
            familyName: 'Kumar',
            firstName: 'Priya',
            middleName: 'Sharma',
            dob: '1995-04-08',
            sex: 'female',
            nationality: 'Indian',
            occupation: 'Doctor',
            passport: 'IN321654987',
            passportIssuePlace: 'Mumbai',
            passportIssueDate: '2023-01-20',
            expiryDate: '2033-01-20',
            visaNumber: 'V321654987',
            visaIssuePlace: 'Yangon',
            visaIssueDate: '2024-05-15',
            fromOrigin: 'Mumbai, India',
            flightNumber: 'AI345',
            firstTrip: 'no',
            groupTour: 'no',
            lengthOfStay: '21',
            visitPurpose: 'transit',
            countryResidence: 'India',
            address: 'Sedona Hotel, Yangon',
            idCardNumber: 'IN987654321',
            fatherName: 'Rajesh Kumar',
            prohibitedGoods: 'no',
            currencyDeclaration: 'yes',
            goodsValue: '8000',
            signatureName: 'Priya Sharma Kumar'
        }
    };

    // Current profile index for cycling through different profiles
    let currentProfileIndex = 0;
    const profileKeys = Object.keys(arrivalCardProfiles);

    // Autofill function for arrival card
    function autofillArrivalCard() {
        const form = document.getElementById('arrival-card-form');
        if (!form) return;

        // Get current profile data
        const currentProfileKey = profileKeys[currentProfileIndex];
        const profileData = arrivalCardProfiles[currentProfileKey];
        
        // Get all form elements
        const formElements = form.querySelectorAll('input, select, textarea');
        let filledCount = 0;
        
        // Fill all form fields with current profile data
        formElements.forEach(element => {
            const elementId = element.id;
            
            // Skip submit button
            if (element.type === 'submit') return;
            
            // Fill with profile data if available
            if (profileData[elementId] !== undefined) {
                element.value = profileData[elementId];
                filledCount++;
            }
            // For elements not in profile data, fill with sensible defaults
            else if (element.type === 'text' || element.type === 'number') {
                if (elementId === 'middle-name') {
                    element.value = ''; // Leave middle name empty if not provided
                } else if (elementId === 'visa-number') {
                    element.value = ''; // Leave visa number empty if not provided
                } else if (elementId === 'visa-issue-place') {
                    element.value = ''; // Leave visa issue place empty if not provided
                } else if (elementId === 'visa-issue-date') {
                    element.value = ''; // Leave visa issue date empty if not provided
                } else if (elementId === 'id-card-number') {
                    element.value = ''; // Leave ID card number empty if not provided
                } else if (elementId === 'father-name') {
                    element.value = ''; // Leave father's name empty if not provided
                } else if (elementId === 'goods-value') {
                    element.value = ''; // Leave goods value empty if not provided
                }
            }
        });

        // Move to next profile for next autofill
        currentProfileIndex = (currentProfileIndex + 1) % profileKeys.length;

        // Show detailed success message with profile info
        const profileName = `${profileData.firstName} ${profileData.familyName}`;
        const profileNationality = profileData.nationality;
        const profileType = profileData.applicantType === 'me' ? 'Self' : 'Other Person';
        
        showAlert(
            `Form filled with ${profileType} profile: ${profileName} (${profileNationality})\n\nAll required fields have been completed.`, 
            'Autofill Complete', 
            'success'
        );
    }

    // Clear form function
    function clearArrivalCard() {
        const form = document.getElementById('arrival-card-form');
        if (!form) return;

        form.reset();
        showAlert('Form has been cleared!', 'Form Cleared', 'info');
    }


    // Save form data function
    function saveArrivalCardData() {
        const form = document.getElementById('arrival-card-form');
        if (!form) return;

        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Save to localStorage
        localStorage.setItem('arrivalCardData', JSON.stringify(data));
        
        // Show detailed save message
        const applicantType = data.applicantType === 'me' ? 'Self' : 'Other Person';
        const travelerName = `${data.firstName} ${data.familyName}`;
        
        showAlert(
            `Form data saved for ${applicantType}: ${travelerName}\n\nThis data will be available for future autofill.`, 
            'Data Saved', 
            'success'
        );
    }

    // Custom Alert Modal Function
    function showAlert(message, title = 'Alert', type = 'info', showCancel = false) {
        const alertModal = document.getElementById('alert-modal');
        const alertTitle = document.getElementById('alert-title');
        const alertMessage = document.getElementById('alert-message');
        const alertIcon = document.getElementById('alert-icon');
        const alertConfirm = document.getElementById('alert-confirm');
        const alertCancel = document.getElementById('alert-cancel');
        
        // Set content
        alertTitle.textContent = title;
        alertMessage.textContent = message;
        
        // Set icon based on type
        const icons = {
            'info': 'info',
            'success': 'check_circle',
            'warning': 'warning',
            'error': 'error'
        };
        alertIcon.textContent = icons[type] || 'info';
        
        // Show/hide cancel button
        alertCancel.style.display = showCancel ? 'block' : 'none';
        
        // Show modal
        alertModal.style.display = 'block';
        
        // Return promise for confirmation
        return new Promise((resolve) => {
            alertConfirm.onclick = () => {
                alertModal.style.display = 'none';
                resolve(true);
            };
            
            alertCancel.onclick = () => {
                alertModal.style.display = 'none';
                resolve(false);
            };
            
            // Close on backdrop click
            alertModal.onclick = (e) => {
                if (e.target === alertModal) {
                    alertModal.style.display = 'none';
                    resolve(false);
                }
            };
        });
    }

    // Initial load
    loadFeature('home');
    loadAnnouncements();
    updateUI(); // Update UI with current language

    function loadShops() {
        let shopsHTML = `
            <div class="shops-container">
                <div class="shops-header">
                    <h2><span class="material-symbols-outlined">storefront</span> <span data-translate="airportShops">Airport Shops & Dining</span></h2>
                    <p class="shops-subtitle" data-translate="discoverBrands">Discover premium brands and local favorites</p>
                </div>
                
                <div class="shops-search-section">
                    <div class="search-container">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input type="text" id="shops-search" placeholder="Search shops, brands, or products..." data-translate-placeholder="searchShops">
                        <button class="search-btn">
                            <span class="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    
                            <div class="filter-tabs">
                                <button class="filter-tab active" data-filter="all" data-translate="all">All</button>
                                <button class="filter-tab" data-filter="luxury" data-translate="luxury">Luxury</button>
                                <button class="filter-tab" data-filter="fashion" data-translate="fashion">Fashion</button>
                                <button class="filter-tab" data-filter="dining" data-translate="dining">Dining</button>
                                <button class="filter-tab" data-filter="local" data-translate="local">Local</button>
                            </div>
                </div>
                
                <div class="shops-stats">
                    <div class="stat-item">
                        <span class="stat-number">${shops.length}</span>
                        <span class="stat-label" data-translate="shopsAvailable">Shops Available</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">24/7</span>
                        <span class="stat-label" data-translate="operatingHours">Operating Hours</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">Free</span>
                        <span class="stat-label" data-translate="wifiAccess">WiFi Access</span>
                    </div>
                </div>
                
                <div class="shops-grid">
        `;

        shops.forEach((shop, index) => {
            // Determine category based on shop name
            let category = 'all';
            if (['Coach', 'Fossil', 'Furla', 'Versace', 'Longines', 'Tumi', 'Samsonite'].includes(shop.name)) {
                category = 'luxury';
            } else if (['Cavalli Class', 'Ermen', 'Galleria', 'Kate', 'Kipling', 'Mandarinaa', 'Mont', 'Phwar', 'Shanghai', 'Swar', 'Ladychin'].includes(shop.name)) {
                category = 'fashion';
            } else if (['Cafe', 'Coffee Bean', 'Espace', 'Kfc', 'Mcs', 'Parison', 'Bon', 'Cafe Corner', 'Jdonuts', 'Krispy', 'Lotteria', 'Yakun', 'Yangoon'].includes(shop.name)) {
                category = 'dining';
            } else {
                category = 'local';
            }

            shopsHTML += `
                <div class="shop-card" data-category="${category}" data-index="${index}">
                    <div class="shop-image-container">
                        <img src="${shop.image_url}" alt="${shop.name}" loading="lazy">
                        <div class="shop-overlay">
                            <button class="quick-view-btn" data-shop="${shop.name}">
                                <span class="material-symbols-outlined">visibility</span>
                            </button>
                        </div>
                    </div>
                    <div class="shop-info">
                        <div class="shop-content">
                            <h3 class="shop-name">${shop.name}</h3>
                            <div class="shop-category">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                        </div>
                        <div class="shop-actions">
                            <button class="view-products-btn" data-shop="${shop.name}">
                                <span class="material-symbols-outlined">shopping_bag</span>
                                View Products
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        shopsHTML += `
                </div>
                
                        <div class="shops-footer">
                            <p class="footer-text" data-translate="cantFind">Can't find what you're looking for? Ask our AI assistant for help!</p>
                            <button class="ai-help-btn" data-translate="getAIHelp">
                                <span class="material-symbols-outlined">smart_toy</span>
                                Get AI Help
                            </button>
                        </div>
            </div>
        `;

        mainContent.innerHTML = shopsHTML;
    }
});