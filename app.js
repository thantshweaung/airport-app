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
                    <div class="quick-action-item" data-feature="points">
                        <span class="material-symbols-outlined">military_tech</span>
                        <span>Rewards</span>
                    </div>
                    <div class="quick-action-item" data-feature="lounge">
                        <span class="material-symbols-outlined">airline_seat_recline_normal</span>
                        <span>Lounge</span>
                    </div>
                    <div class="quick-action-item" data-feature="parking">
                        <span class="material-symbols-outlined">directions_car</span>
                        <span>Parking</span>
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
                        <img src="https://images.unsplash.com/photo-1570857502907-181644be3963?q=80&w=400" alt="Cosmetics">
                        <div class="shop-info">
                            <h3>Luxe Cosmetics</h3>
                            <p>Beauty & Fragrance</p>
                            <span>T1, Near Gate 5</span>
                        </div>
                    </div>
                    <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" alt="Watches">
                        <div class="shop-info">
                            <h3>Timepiece Emporium</h3>
                            <p>Watches & Jewelry</p>
                            <span>T1, Concourse A</span>
                        </div>
                    </div>
                    <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?q=80&w=400" alt="Chocolates">
                        <div class="shop-info">
                            <h3>Sweet Escapes</h3>
                            <p>Chocolates & Souvenirs</p>
                            <span>T2, Near Check-in</span>
                        </div>
                    </div>
                     <div class="shop-card">
                        <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400" alt="Fashion">
                        <div class="shop-info">
                            <h3>Global Threads</h3>
                            <p>Fashion & Apparel</p>
                            <span>T1, After Security</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        lounge: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">airline_seat_recline_normal</span> CIP Lounge Booking</h2>
                <form id="lounge-booking-form">
                    <div class="form-group">
                        <label for="lounge-name">Full Name</label>
                        <input type="text" id="lounge-name" required>
                    </div>
                    <div class="form-group">
                        <label for="lounge-flight">Flight Number</label>
                        <input type="text" id="lounge-flight" required>
                    </div>
                    <div class="form-group">
                        <label for="lounge-time">Entry Time</label>
                        <input type="datetime-local" id="lounge-time" required>
                    </div>
                    <button type="submit" class="btn">Book Now</button>
                </form>
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
        points: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">military_tech</span> Points & Rewards</h2>
                <div class="points-balance">
                    <span class="balance-label">Your Points</span>
                    <div class="balance-amount">1,250 pts</div>
                </div>
                <div class="rewards-list">
                    <h3 class="list-header">Available Rewards</h3>
                    <div class="reward-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">coffee</span>
                            <div>
                                <div>Free Coffee</div>
                                <small>500 pts</small>
                            </div>
                        </div>
                        <button class="btn">Redeem</button>
                    </div>
                    <div class="reward-item">
                        <div class="item-details">
                            <span class="material-symbols-outlined">local_mall</span>
                            <div>
                                <div>$5 Duty-Free Voucher</div>
                                <small>1000 pts</small>
                            </div>
                        </div>
                        <button class="btn">Redeem</button>
                    </div>
                </div>
            </div>
        `
    };

    function loadFeature(featureName) {
        mainContent.innerHTML = features[featureName];
        
        if (featureName === 'home') {
            backBtn.style.display = 'none';
            headerText.style.textAlign = 'center';
        } else {
            backBtn.style.display = 'block';
            headerText.style.textAlign = 'left';
        }

        // Add event listeners
        const arrivalForm = document.getElementById('arrival-card-form');
        if(arrivalForm) arrivalForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Arrival card submitted!'); });

        const loungeForm = document.getElementById('lounge-booking-form');
        if(loungeForm) loungeForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Lounge booked!'); });
        
        const evPaymentForm = document.getElementById('ev-payment-form');
        if(evPaymentForm) evPaymentForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Payment successful! Charging started.'); });

        const carbonForm = document.getElementById('carbon-offset-form');
        if(carbonForm) carbonForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Thank you for your contribution!'); });

        const topUpBtn = document.getElementById('top-up-btn');
        if(topUpBtn) topUpBtn.addEventListener('click', () => alert('Top Up function coming soon!'));

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

    // Initial load
    loadFeature('home');
});
