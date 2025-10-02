document.addEventListener('DOMContentLoaded', () => {
    // Load saved language first
    loadLanguage();
    
    // Load arrival_customs feature by default for guests
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

    // Define features object before using it
    const features = {
        home: `
            <div class="home-dashboard">
                <div class="cards-carousel">
                    <div class="carousel-container">
                        <div class="carousel-track">
                            <div class="carousel-slide active">
                                <div class="feature-card flight-status-card">
                                    <h2><span class="material-symbols-outlined">flight_takeoff</span> <span data-translate="checkFlightStatus">Check Flight Status</span></h2>
                                    <form id="home-flight-status-form">
                                        <div class="form-group">
                                            <input type="text" id="home-flight-number-search" placeholder="Enter Flight Number, e.g., 8M 231">
                                        </div>
                                        <button type="submit" class="btn">Search</button>
                                    </form>
                                    <div id="home-flight-results" class="home-flight-results"></div>
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
                        <span class="service-title">Arrival/<br>Departure</span>
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
        arrival_customs: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">flight_land</span> Digital Arrival/Departure Card</h2>
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
        map: `
            <div class="feature-card">
                <h2><span class="material-symbols-outlined">map</span> Yangon Airport Map</h2>
                <div class="airport-info">
                    <p><strong>Position:</strong> 16°54´26"N, 096°08´12"E</p>
                    <p><strong>IATA:</strong> RGN | <strong>ICAO:</strong> VYYY</p>
                </div>
                <div class="map-container">
                    <iframe
                        width="100%"
                        height="400"
                        frameborder="0"
                        style="border:0; border-radius: var(--border-radius);"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.1234567890123!2d96.13700000000001!3d16.90722222222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e6e7b8b8b%3A0x1234567890abcdef!2sYangon%20International%20Airport!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
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
            // Close AI chat container when returning to home
            if (aiChatContainer && aiChatContainer.classList.contains('active')) {
                aiChatContainer.classList.remove('active');
            }
        } else {
            if (backBtn.style.display === 'none') {
                backBtn.style.display = 'flex';
                backBtn.classList.add('show');
                setTimeout(() => {
                    backBtn.classList.remove('show');
                }, 400);
            }
            headerText.style.textAlign = 'left';
            // Close AI chat container when navigating to other services
            if (aiChatContainer && aiChatContainer.classList.contains('active')) {
                aiChatContainer.classList.remove('active');
            }
        }

        // Add event listeners
        const arrivalForm = document.getElementById('arrival-card-form');
        if(arrivalForm) {
            arrivalForm.addEventListener('submit', (e) => { 
                e.preventDefault(); 
                saveArrivalCardData();
                showAlert('Arrival/Departure card submitted!', 'Submission Successful', 'success'); 
            });
        }

        // Autofill and Clear buttons
        const autofillBtn = document.getElementById('autofill-btn');
        if(autofillBtn) {
            autofillBtn.addEventListener('click', () => {
                autofillForm();
            });
        }

        const clearFormBtn = document.getElementById('clear-form-btn');
        if(clearFormBtn) {
            clearFormBtn.addEventListener('click', () => {
                clearForm();
            });
        }

        // Wallet actions
        const topUpBtn = document.getElementById('top-up-btn');
        if(topUpBtn) topUpBtn.addEventListener('click', () => loadFeature('top_up'));

        const payBtn = document.getElementById('pay-btn');
        if(payBtn) payBtn.addEventListener('click', () => showAlert('Pay function coming soon!', 'Payment', 'info'));

        // Service items
        const serviceItems = document.querySelectorAll('.service-item');
        console.log('Setting up service item listeners for', serviceItems.length, 'items');
        serviceItems.forEach(item => {
            item.addEventListener('click', () => {
                const feature = item.getAttribute('data-feature');
                console.log('Service item clicked:', feature);
                loadFeature(feature);
                updateNav(feature);
            });
        });
    }

    function updateNav(featureName) {
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-feature') === featureName);
        });
    }

    function autofillForm() {
        const profiles = [
            {
                firstName: 'John',
                lastName: 'Doe',
                nationality: 'American',
                passport: 'A1234567',
                profileType: 'Tourist'
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                nationality: 'British',
                passport: 'B9876543',
                profileType: 'Business'
            },
            {
                firstName: 'Thant',
                lastName: 'Shwe Aung',
                nationality: 'Myanmar',
                passport: 'M5551234',
                profileType: 'Local'
            }
        ];

        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
        const profileName = `${randomProfile.firstName} ${randomProfile.lastName}`;

        document.getElementById('family-name').value = randomProfile.lastName;
        document.getElementById('first-name').value = randomProfile.firstName;
        document.getElementById('nationality').value = randomProfile.nationality;
        document.getElementById('passport').value = randomProfile.passport;
        document.getElementById('applicant-type').value = 'me';
        document.getElementById('sex').value = 'male';
        document.getElementById('occupation').value = 'Software Engineer';
        document.getElementById('from-origin').value = 'Singapore';
        document.getElementById('flight-number').value = '8M 231';
        document.getElementById('first-trip').value = 'no';
        document.getElementById('group-tour').value = 'no';
        document.getElementById('length-of-stay').value = '7';
        document.getElementById('visit-purpose').value = 'tourist';
        document.getElementById('country-residence').value = 'Singapore';
        document.getElementById('address').value = 'Hotel Yangon';
        document.getElementById('signature-name').value = profileName;

        showAlert(
            `Form filled with ${randomProfile.profileType} profile: ${profileName} (${randomProfile.nationality})\n\nClick OK to navigate to Customs Declaration section.`, 
            'Autofill Complete', 
            'success'
        );
    }

    function clearForm() {
        const form = document.getElementById('arrival-card-form');
        if (form) {
            form.reset();
        }
    }

    function saveArrivalCardData() {
        const formData = {
            applicantType: document.getElementById('applicant-type').value,
            familyName: document.getElementById('family-name').value,
            firstName: document.getElementById('first-name').value,
            middleName: document.getElementById('middle-name').value,
            dob: document.getElementById('dob').value,
            sex: document.getElementById('sex').value,
            nationality: document.getElementById('nationality').value,
            occupation: document.getElementById('occupation').value,
            passport: document.getElementById('passport').value,
            passportIssuePlace: document.getElementById('passport-issue-place').value,
            passportIssueDate: document.getElementById('passport-issue-date').value,
            expiryDate: document.getElementById('expiry-date').value,
            visaNumber: document.getElementById('visa-number').value,
            visaIssuePlace: document.getElementById('visa-issue-place').value,
            visaIssueDate: document.getElementById('visa-issue-date').value,
            fromOrigin: document.getElementById('from-origin').value,
            flightNumber: document.getElementById('flight-number').value,
            firstTrip: document.getElementById('first-trip').value,
            groupTour: document.getElementById('group-tour').value,
            lengthOfStay: document.getElementById('length-of-stay').value,
            visitPurpose: document.getElementById('visit-purpose').value,
            countryResidence: document.getElementById('country-residence').value,
            address: document.getElementById('address').value,
            idCardNumber: document.getElementById('id-card-number').value,
            fatherName: document.getElementById('father-name').value,
            prohibitedGoods: document.getElementById('prohibited-goods').value,
            currencyDeclaration: document.getElementById('currency-declaration').value,
            goodsValue: document.getElementById('goods-value').value,
            signatureName: document.getElementById('signature-name').value
        };

        localStorage.setItem('arrivalCardData', JSON.stringify(formData));
    }

    function showAlert(message, title = 'Alert', type = 'info') {
        const alertModal = document.getElementById('alert-modal');
        const alertTitle = document.getElementById('alert-title');
        const alertMessage = document.getElementById('alert-message');
        const alertIcon = document.getElementById('alert-icon');
        const alertConfirm = document.getElementById('alert-confirm');

        alertTitle.textContent = title;
        alertMessage.textContent = message;

        // Set icon based on type
        const icons = {
            success: 'check_circle',
            error: 'error',
            warning: 'warning',
            info: 'info'
        };
        alertIcon.textContent = icons[type] || 'info';

        alertModal.style.display = 'flex';

        return new Promise((resolve) => {
            alertConfirm.onclick = () => {
                alertModal.style.display = 'none';
                resolve();
            };
        });
    }

    function loadShops() {
        mainContent.innerHTML = `
            <div class="shops-container">
                <div class="shops-header">
                    <h2><span class="material-symbols-outlined">storefront</span> Airport Shops & Dining</h2>
                    <p class="shops-subtitle">Discover premium brands and local favorites</p>
                </div>
                
                <div class="shops-search-section">
                    <div class="search-container">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input type="text" id="shop-search" placeholder="Search shops, restaurants, brands...">
                    </div>
                </div>

                <div class="shops-categories">
                    <div class="category-section">
                        <h3><span class="material-symbols-outlined">storefront</span> Shopping</h3>
                        <div class="shops-grid">
                            <div class="shop-item">
                                <div class="shop-logo">Coach</div>
                                <h4>Coach</h4>
                                <p>Luxury Handbags & Accessories</p>
                                <span class="shop-location">Terminal 1 - Gate A1-A5</span>
                            </div>
                            <div class="shop-item">
                                <div class="shop-logo">Fossil</div>
                                <h4>Fossil</h4>
                                <p>Watches & Leather Goods</p>
                                <span class="shop-location">Terminal 1 - Gate A6-A10</span>
                            </div>
                        </div>
                    </div>

                    <div class="category-section">
                        <h3><span class="material-symbols-outlined">restaurant</span> Dining</h3>
                        <div class="shops-grid">
                            <div class="shop-item">
                                <div class="shop-logo">KFC</div>
                                <h4>KFC</h4>
                                <p>Fried Chicken & Fast Food</p>
                                <span class="shop-location">Terminal 1 - Food Court</span>
                            </div>
                            <div class="shop-item">
                                <div class="shop-logo">McDonald's</div>
                                <h4>McDonald's</h4>
                                <p>Burgers & Fast Food</p>
                                <span class="shop-location">Terminal 1 - Gate B6-B10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Navigation event listeners
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
            addChatMessage(userMessage, 'user');
            chatInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const aiResponse = getAIResponse(userMessage);
                addChatMessage(aiResponse, 'bot');
            }, 1000);
        }
    });

    function addChatMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getAIResponse(userMessage) {
        const responses = [
            "I can help you with flight information, airport directions, and services.",
            "You can check your flight status using the flight search feature.",
            "The airport has multiple terminals with various shops and restaurants.",
            "For customs forms, use the Arrival/Departure card feature.",
            "Need help with parking? Check the parking availability feature."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Language functions
    function loadLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        updateUI();
    }

    function updateUI() {
        // Update UI elements based on current language
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = getTranslation(key);
        });
    }

    function getTranslation(key) {
        const translations = {
            'home': 'Home',
            'profile': 'Profile',
            'settings': 'Settings',
            'checkFlightStatus': 'Check Flight Status',
            'promotions': 'Promotions',
            'learnMore': 'Learn More'
        };
        return translations[key] || key;
    }

    // Initial load - check authentication status
    function checkAuthAndLoad() {
        console.log('Checking authentication status...');
        
        const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        
        if (isLoggedIn) {
            // For logged-in users, show home page with service grid
            const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
            console.log('User is logged in:', currentUser.email);
            loadFeature('home');
            updateNav('home');
        } else {
            // For guests, show arrival customs form directly
            console.log('User is a guest - showing arrival customs form');
            loadFeature('arrival_customs');
            updateNav('arrival_customs');
            // Hide back button for guests since they're on the main form
            const backBtn = document.getElementById('back-btn');
            if (backBtn) {
                backBtn.style.display = 'none';
            }
            // Hide bottom navigation for guests
            const bottomNav = document.querySelector('.bottom-nav');
            if (bottomNav) {
                bottomNav.style.display = 'none';
            }
        }
    }
    
    // Check auth status and load appropriate content
    checkAuthAndLoad();
    
    // Ensure AI chat container starts in closed state
    if (aiChatContainer && aiChatContainer.classList.contains('active')) {
        aiChatContainer.classList.remove('active');
    }
    
    loadAnnouncements();
    updateUI(); // Update UI with current language

    function loadAnnouncements() {
        const announcements = [
            "Welcome to Yangon International Airport",
            "Please keep your belongings secure",
            "Flight information is available on our app"
        ];
        
        const container = document.getElementById('announcement-container');
        if (container) {
            container.innerHTML = `
                <div class="announcement-item">
                    <span class="material-symbols-outlined">campaign</span>
                    <span>${announcements[0]}</span>
                </div>
            `;
        }
    }
});