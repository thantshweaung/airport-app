document.addEventListener('DOMContentLoaded', () => {
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
                <div class="feature-card flight-status-card">
                    <h2><span class="material-symbols-outlined">flight_takeoff</span> Check Flight Status</h2>
                    <form id="flight-status-form">
                        <div class="form-group">
                            <input type="text" id="flight-number-search" placeholder="Enter Flight Number, e.g., 8M 231">
                        </div>
                        <button type="submit" class="btn">Search</button>
                    </form>
                </div>

                <div class="quick-actions-grid">
                     <div class="quick-action-item" data-feature="wallet">
                        <span class="material-symbols-outlined">account_balance_wallet</span>
                        <span>Wallet</span>
                    </div>
                    <div class="quick-action-item" data-feature="parking">
                        <span class="material-symbols-outlined">directions_car</span>
                        <span>Parking</span>
                    </div>
                    <div class="quick-action-item" data-feature="rewards">
                        <span class="material-symbols-outlined">military_tech</span>
                        <span>Rewards</span>
                    </div>
                    <div class="quick-action-item" data-feature="custom_declaration">
                        <span class="material-symbols-outlined">description</span>
                        <span>Customs</span>
                    </div>
                </div>

                <div class="feature-card promotions-card">
                     <h2><span class="material-symbols-outlined">campaign</span> Promotions</h2>
                     <p>Enjoy a 10% discount at select restaurants when you pay with your app wallet!</p>
                </div>

                <div class="feature-card ad-card">
                    <div class="ad-badge">Ad</div>
                    <h3>Fast & Reliable Airport Taxi</h3>
                    <p>Book your ride to the city instantly. Safe, comfortable, and fixed prices.</p>
                    <button class="btn ad-btn">Book Now</button>
                </div>

                <div class="home-grid">
                    <div class="home-item" data-feature="arrival_card">
                        <span class="material-symbols-outlined">flight_land</span>
                        <span>Arrival Card</span>
                    </div>
                    <div class="home-item" data-feature="ev_charging">
                        <span class="material-symbols-outlined">ev_station</span>
                        <span>EV Charging</span>
                    </div>
                    <div class="home-item" data-feature="carbon_offset">
                        <span class="material-symbols-outlined">public</span>
                        <span>Carbon Offset</span>
                    </div>
                    <div class="home-item" data-feature="map">
                        <span class="material-symbols-outlined">map</span>
                        <span>Airport Map</span>
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
        arrival_card: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">flight_land</span> Digital Arrival Card</h2>
                <form id="arrival-card-form">
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
        duty_free: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">storefront</span> Duty-Free Shops</h2>
                <div class="form-group">
                    <input type="text" id="duty-free-search" placeholder="Search for shops or products...">
                </div>
                <div class="duty-free-grid">
                    <div class="shop-card">
                        <img src="https://via.placeholder.com/400x400?text=Cosmetics" alt="Cosmetics">
                        <div class="shop-info">
                            <h3>Luxe Cosmetics</h3>
                            <p>Beauty & Fragrance</p>
                            <span>T1, Near Gate 5</span>
                        </div>
                    </div>
                    <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" alt="Watches">
                        <div class="shop-info">
                            <h3>Timepiece Emporium</h3>
                            <p>Watches & Jewelry</p>
                            <span>T1, Concourse A</span>
                        </div>
                    </div>
                    <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?q=80&w=400&auto=format&fit=crop" alt="Chocolates">
                        <div class="shop-info">
                            <h3>Sweet Escapes</h3>
                            <p>Chocolates & Souvenirs</p>
                            <span>T2, Near Check-in</span>
                        </div>
                    </div>
                     <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop" alt="Fashion">
                        <div class="shop-info">
                            <h3>Global Threads</h3>
                            <p>Fashion & Apparel</p>
                            <span>T1, After Security</span>
                        </div>
                    </div>
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
        custom_declaration: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">description</span> Passenger Declaration Form</h2>
                <p>Please fill in Block Letters</p>
                <form id="custom-declaration-form">
                    <div class="form-group">
                        <label for="cd-full-name">Name</label>
                        <input type="text" id="cd-full-name" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-passport-number">Passport No.</label>
                        <input type="text" id="cd-passport-number" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-nationality">Nationality</label>
                        <input type="text" id="cd-nationality" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-dob">Date of Birth (D/M/Y)</label>
                        <input type="text" id="cd-dob" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-occupation">Occupation</label>
                        <input type="text" id="cd-occupation" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-flight-number">Flight No./Vessel</label>
                        <input type="text" id="cd-flight-number" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-from">From</label>
                        <input type="text" id="cd-from" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-date-arrival">Date of arrival</label>
                        <input type="date" id="cd-date-arrival" required>
                    </div>

                    <div class="form-group">
                        <label>1. Do you have dutiable, prohibited, restricted goods to declare?</label>
                        <div class="channel-selection">
                            <button type="button" class="btn red-channel">Red Channel (Goods to Declare)</button>
                            <button type="button" class="btn green-channel">Green Channel (Nothing to Declare)</button>
                        </div>
                        <p class="channel-info">If you are in doubt, please proceed through the Red channel.</p>
                    </div>

                    <div class="form-group">
                        <label>2. Are you bringing foreign currency over US$ 10000 or equivalent?</label>
                        <select id="cd-currency" required>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        <input type="text" id="cd-currency-amount" placeholder="Amount" style="display: none; margin-top: 10px;">
                        <p class="info-text">If yes, declare to Customs and take back FED (Foreign Exchange Declaration) form.</p>
                    </div>

                    <div class="form-group">
                        <label>3. Do you have any valuable articles including gold, jewellery etc. for temporary admission?</label>
                        <select id="cd-valuables" required>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        <p class="info-text">If yes, please declare on the reverse side.</p>
                    </div>

                    <div class="form-group">
                        <label for="cd-signature">Signature</label>
                        <input type="text" id="cd-signature" required>
                        <p class="info-text">I have read the NOTICE and certify that this declaration is true and correct.</p>
                    </div>

                    <button type="submit" class="btn">Submit Declaration</button>
                </form>
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
                    <div class="home-item" data-feature="arrival_card">
                        <span class="material-symbols-outlined">flight_land</span>
                        <span>Arrival Card</span>
                    </div>
                    <div class="home-item" data-feature="lounge">
                        <span class="material-symbols-outlined">deck</span>
                        <span>Lounge</span>
                    </div>
                    <div class="home-item" data-feature="ev_charging">
                        <span class="material-symbols-outlined">ev_station</span>
                        <span>EV Charging</span>
                    </div>
                    <div class="home-item" data-feature="carbon_offset">
                        <span class="material-symbols-outlined">public</span>
                        <span>Carbon Offset</span>
                    </div>
                    <div class="home-item" data-feature="map">
                        <span class="material-symbols-outlined">map</span>
                        <span>Airport Map</span>
                    </div>
                    <div class="home-item" data-feature="rewards">
                        <span class="material-symbols-outlined">military_tech</span>
                        <span>Rewards</span>
                    </div>
                    <div class="home-item" data-feature="custom_declaration">
                        <span class="material-symbols-outlined">description</span>
                        <span>Customs</span>
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
        `
    };

    function loadFeature(featureName) {
        mainContent.innerHTML = features[featureName];
        
        if (featureName === 'home' || featureName === 'more') {
            backBtn.style.display = 'none';
            headerText.style.textAlign = 'center';
        } else {
            backBtn.style.display = 'block';
            headerText.style.textAlign = 'left';
        }

        // Add event listeners
        const arrivalForm = document.getElementById('arrival-card-form');
        if(arrivalForm) arrivalForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Arrival card submitted!'); });

        const evPaymentForm = document.getElementById('ev-payment-form');
        if(evPaymentForm) evPaymentForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Payment successful! Charging started.'); });

        const carbonForm = document.getElementById('carbon-offset-form');
        if(carbonForm) carbonForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Thank you for your contribution!'); });

        const customDeclarationForm = document.getElementById('custom-declaration-form');
        if(customDeclarationForm) {
            customDeclarationForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Customs Declaration Submitted!'); });

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
                alert('Please proceed to the Red Channel for inspection.');
            });

            greenChannelBtn.addEventListener('click', () => {
                alert('You may proceed through the Green Channel.');
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
                alert(`Proceeding to pay ${amount} MMK with ${method}`);
            } else {
                alert('Please enter an amount and select a payment method.');
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
        if(payBtn) payBtn.addEventListener('click', () => alert('Pay function coming soon!'));

        const mmqrPayBtn = document.getElementById('mmqr-pay-btn');
        if(mmqrPayBtn) mmqrPayBtn.addEventListener('click', () => {
            loadFeature('mmqr_payment');
            updateNav('mmqr_payment');
        });

        const generateQrBtn = document.querySelector('#mmqr-payment .btn');
        if(generateQrBtn) generateQrBtn.addEventListener('click', () => alert('MMQR payment initiated!'));

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

        const quickActionItems = document.querySelectorAll('.quick-action-item');
        quickActionItems.forEach(item => {
            item.addEventListener('click', () => {
                const feature = item.getAttribute('data-feature');
                loadFeature(feature);
                updateNav(feature);
            });
        });

        const homeItems = document.querySelectorAll('.home-item');
        homeItems.forEach(item => {
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
                alert(`Filtering by: ${btn.dataset.filter}`);
            });
        });

        const loungeBookingForm = document.getElementById('lounge-booking-form');
        if(loungeBookingForm) loungeBookingForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Lounge booked successfully!'); });
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

    // Initial load
    loadFeature('home');
    loadAnnouncements();
});