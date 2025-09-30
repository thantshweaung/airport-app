document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');

    const sections = {
        dashboard: `
            <div class="page-header"><h1>Dashboard</h1></div>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="icon" style="background: #2980B9;"><span class="material-symbols-outlined">flight</span></div>
                    <div class="info">
                        <h3>152</h3>
                        <p>Flights Today</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon" style="background: #27AE60;"><span class="material-symbols-outlined">group</span></div>
                    <div class="info">
                        <h3>1,280</h3>
                        <p>Active Users</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon" style="background: #F39C12;"><span class="material-symbols-outlined">campaign</span></div>
                    <div class="info">
                        <h3>5</h3>
                        <p>Active Promotions</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon" style="background: #8E44AD;"><span class="material-symbols-outlined">description</span></div>
                    <div class="info">
                        <h3>45</h3>
                        <p>Arrivals Today</p>
                    </div>
                </div>
            </div>
            <div class="dashboard-grid">
                <div class="dashboard-section chart-container">
                    <h2>Flight Status Overview</h2>
                    <canvas id="flightStatusChart"></canvas>
                </div>
                <div class="dashboard-section chart-container">
                    <h2>User Engagement</h2>
                    <canvas id="userEngagementChart"></canvas>
                </div>
                <div class="dashboard-section chart-container full-width">
                    <h2>Revenue by Service</h2>
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>
        `,
        flights: `
            <div class="page-header"><h1>Flights</h1></div>
            <div class="data-table-container">
                <div class="table-header">
                    <h2>All Flights</h2>
                    <button class="btn add-flight-btn">Add New Flight</button>
                </div>
                <table>
                    <thead><tr><th>Flight No.</th><th>Origin</th><th>Destination</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>8M 231</td><td>YGN</td><td>MDL</td><td><span class="status on-time">On Time</span></td><td><div class="action-buttons"><button class="edit-flight-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                        <tr><td>UB 101</td><td>YGN</td><td>BKK</td><td><span class="status delayed">Delayed</span></td><td><div class="action-buttons"><button class="edit-flight-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                        <tr><td>FD 252</td><td>DMK</td><td>YGN</td><td><span class="status cancelled">Cancelled</span></td><td><div class="action-buttons"><button class="edit-flight-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        users: `
             <div class="page-header"><h1>Users</h1></div>
             <div class="data-table-container">
                <div class="table-header"><h2>All Users</h2></div>
                <table>
                    <thead><tr><th>Name</th><th>Email</th><th>Member Tier</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>Thant Shwe Aung</td><td>thantshweaung@example.com</td><td>Gold</td><td><div class="action-buttons"><button class="view-user-btn"><span class="material-symbols-outlined">visibility</span></button><button class="block-user-btn"><span class="material-symbols-outlined">block</span></button></div></td></tr>
                        <tr><td>John Doe</td><td>john.doe@example.com</td><td>Silver</td><td><div class="action-buttons"><button class="view-user-btn"><span class="material-symbols-outlined">visibility</span></button><button class="block-user-btn"><span class="material-symbols-outlined">block</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        promotions: `
            <div class="page-header"><h1>Promotions</h1></div>
             <div class="data-table-container">
                <div class="table-header">
                    <h2>Active Promotions</h2>
                    <button class="btn create-promo-btn">Create Promotion</button>
                </div>
                <table>
                    <thead><tr><th>Title</th><th>Discount</th><th>Valid Until</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>10% Off at Restaurants</td><td>10%</td><td>2025-12-31</td><td><div class="action-buttons"><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        arrivals: `
            <div class="page-header"><h1>Arrival Cards</h1></div>
             <div class="data-table-container">
                <div class="table-header"><h2>Recent Submissions</h2></div>
                <table>
                    <thead><tr><th>Name</th><th>Passport No.</th><th>Flight No.</th><th>Submitted At</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>Jane Doe</td><td>K1234567</td><td>8M 231</td><td>2025-09-30 10:30</td><td><div class="action-buttons"><button class="view-arrival-btn"><span class="material-symbols-outlined">visibility</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        wallet: `
            <div class="page-header"><h1>Wallet Management</h1></div>
            <div class="data-table-container">
                <div class="table-header"><h2>User Wallets</h2></div>
                <table>
                    <thead><tr><th>User</th><th>Balance</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>thantshweaung@example.com</td><td>K 25,000</td><td><div class="action-buttons"><button class="view-transactions-btn"><span class="material-symbols-outlined">history</span></button></div></td></tr>
                        <tr><td>john.doe@example.com</td><td>K 5,000</td><td><div class="action-buttons"><button class="view-transactions-btn"><span class="material-symbols-outlined">history</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        rewards: `
            <div class="page-header"><h1>Rewards Management</h1></div>
            <div class="data-table-container">
                <div class="table-header">
                    <h2>Available Rewards</h2>
                    <button class="btn add-reward-btn">Add New Reward</button>
                </div>
                <table>
                    <thead><tr><th>Reward</th><th>Points</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>Free Coffee</td><td>200</td><td><div class="action-buttons"><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                        <tr><td>$5 Shopping Voucher</td><td>500</td><td><div class="action-buttons"><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                        <tr><td>Lounge Access</td><td>1000</td><td><div class="action-buttons"><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        ev_charging: `
            <div class="page-header"><h1>EV Charging Management</h1></div>
            <div class="data-table-container">
                <div class="table-header">
                    <h2>Price List</h2>
                    <button class="btn add-price-btn">Add New Price</button>
                </div>
                <table>
                    <thead><tr><th>Location</th><th>Price (per kWh)</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>T1, Zone A</td><td>K 500</td><td><div class="action-buttons"><button class="edit-price-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        parking: `
            <div class="page-header"><h1>Parking Layout</h1></div>
            <div class="parking-layout-container">
                <div class="parking-zone" id="zone-a"><h3>Zone A</h3></div>
                <div class="parking-zone" id="zone-b"><h3>Zone B</h3></div>
                <div class="parking-zone" id="zone-c"><h3>Zone C</h3></div>
            </div>
        `,
        ads: `
            <div class="page-header"><h1>Ads Management</h1></div>
            <div class="data-table-container">
                <div class="table-header">
                    <h2>Advertisements</h2>
                    <button class="btn add-ad-btn">Add New Ad</button>
                </div>
                <table>
                    <thead><tr><th>Title</th><th>Status</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>Fast & Reliable Airport Taxi</td><td>Active</td><td><div class="action-buttons"><button class="edit-ad-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        announcements: `
            <div class="page-header"><h1>Announcements</h1></div>
            <div class="data-table-container">
                <div class="table-header">
                    <h2>All Announcements</h2>
                    <button class="btn add-announcement-btn">Add New Announcement</button>
                </div>
                <table>
                    <thead><tr><th>Title</th><th>Message</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr><td>Terminal 1 Renovation</td><td>Terminal 1 will be closed for renovation from...</td><td><div class="action-buttons"><button class="edit-announcement-btn"><span class="material-symbols-outlined">edit</span></button><button class="delete-btn"><span class="material-symbols-outlined">delete</span></button></div></td></tr>
                    </tbody>
                </table>
            </div>
        `,
        settings: `
            <div class="page-header"><h1>Settings</h1></div>
            <p>Settings page is under construction.</p>
        `
    };

    function openModal(content) {
        modalBody.innerHTML = content;
        modalContainer.style.display = 'block';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
        modalBody.innerHTML = '';
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    function renderAddFlightForm() {
        const form = `
            <h2>Add New Flight</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="flight-no">Flight Number</label>
                    <input type="text" id="flight-no" required>
                </div>
                <div class="form-group">
                    <label for="origin">Origin</label>
                    <input type="text" id="origin" required>
                </div>
                <div class="form-group">
                    <label for="destination">Destination</label>
                    <input type="text" id="destination" required>
                </div>
                <div class="form-group">
                    <label for="status">Status</label>
                    <select id="status">
                        <option value="on-time">On Time</option>
                        <option value="delayed">Delayed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <button type="submit" class="btn">Add Flight</button>
            </form>
        `;
        openModal(form);
    }
    
    function renderEditFlightForm(flightData) {
        const form = `
            <h2>Edit Flight ${flightData.flightNo}</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="flight-no">Flight Number</label>
                    <input type="text" id="flight-no" value="${flightData.flightNo}" required>
                </div>
                <div class="form-group">
                    <label for="origin">Origin</label>
                    <input type="text" id="origin" value="${flightData.origin}" required>
                </div>
                <div class="form-group">
                    <label for="destination">Destination</label>
                    <input type="text" id="destination" value="${flightData.destination}" required>
                </div>
                <div class="form-group">
                    <label for="status">Status</label>
                    <select id="status">
                        <option value="on-time" ${flightData.status === 'On Time' ? 'selected' : ''}>On Time</option>
                        <option value="delayed" ${flightData.status === 'Delayed' ? 'selected' : ''}>Delayed</option>
                        <option value="cancelled" ${flightData.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        `;
        openModal(form);
    }

    function renderViewUser(userData) {
        const content = `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Member Tier:</strong> ${userData.tier}</p>
        `;
        openModal(content);
    }

    function renderCreatePromoForm() {
        const form = `
            <h2>Create New Promotion</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="promo-title">Title</label>
                    <input type="text" id="promo-title" required>
                </div>
                <div class="form-group">
                    <label for="discount">Discount (%)</label>
                    <input type="number" id="discount" required>
                </div>
                <div class="form-group">
                    <label for="valid-until">Valid Until</label>
                    <input type="date" id="valid-until" required>
                </div>
                <button type="submit" class="btn">Create Promotion</button>
            </form>
        `;
        openModal(form);
    }

    function renderViewArrival(arrivalData) {
        const content = `
            <h2>Arrival Card Details</h2>
            <p><strong>Name:</strong> ${arrivalData.name}</p>
            <p><strong>Passport No:</strong> ${arrivalData.passport}</p>
            <p><strong>Flight No:</strong> ${arrivalData.flightNo}</p>
            <p><strong>Submitted At:</strong> ${arrivalData.submittedAt}</p>
        `;
        openModal(content);
    }

    function renderAddRewardForm() {
        const form = `
            <h2>Add New Reward</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="reward-name">Reward Name</label>
                    <input type="text" id="reward-name" required>
                </div>
                <div class="form-group">
                    <label for="points">Points</label>
                    <input type="number" id="points" required>
                </div>
                <button type="submit" class="btn">Add Reward</button>
            </form>
        `;
        openModal(form);
    }

    function renderViewTransactions(user) {
        const content = `
            <h2>Transaction History for ${user}</h2>
            <table>
                <thead><tr><th>Date</th><th>Description</th><th>Amount</th></tr></thead>
                <tbody>
                    <tr><td>2025-09-30</td><td>Gloria Jean's</td><td>- K 5,500</td></tr>
                    <tr><td>2025-09-29</td><td>Top Up</td><td>+ K 30,000</td></tr>
                </tbody>
            </table>
        `;
        openModal(content);
    }

    function renderAddPriceForm() {
        const form = `
            <h2>Add New Price</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" required>
                </div>
                <div class="form-group">
                    <label for="price">Price (per kWh)</label>
                    <input type="number" id="price" required>
                </div>
                <button type="submit" class="btn">Add Price</button>
            </form>
        `;
        openModal(form);
    }

    function renderEditPriceForm(priceData) {
        const form = `
            <h2>Edit Price for ${priceData.location}</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" value="${priceData.location}" required>
                </div>
                <div class="form-group">
                    <label for="price">Price (per kWh)</label>
                    <input type="number" id="price" value="${priceData.price}" required>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        `;
        openModal(form);
    }

    function renderAddAdForm() {
        const form = `
            <h2>Add New Ad</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="ad-title">Title</label>
                    <input type="text" id="ad-title" required>
                </div>
                <div class="form-group">
                    <label for="ad-status">Status</label>
                    <select id="ad-status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button type="submit" class="btn">Add Ad</button>
            </form>
        `;
        openModal(form);
    }

    function renderEditAdForm(adData) {
        const form = `
            <h2>Edit Ad: ${adData.title}</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="ad-title">Title</label>
                    <input type="text" id="ad-title" value="${adData.title}" required>
                </div>
                <div class="form-group">
                    <label for="ad-status">Status</label>
                    <select id="ad-status">
                        <option value="active" ${adData.status === 'Active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${adData.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                    </select>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        `;
        openModal(form);
    }

    function renderAddAnnouncementForm() {
        const form = `
            <h2>Add New Announcement</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="announcement-title">Title</label>
                    <input type="text" id="announcement-title" required>
                </div>
                <div class="form-group">
                    <label for="announcement-message">Message</label>
                    <textarea id="announcement-message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn">Add Announcement</button>
            </form>
        `;
        openModal(form);
    }

    function renderEditAnnouncementForm(announcementData) {
        const form = `
            <h2>Edit Announcement: ${announcementData.title}</h2>
            <form class="modal-form">
                <div class="form-group">
                    <label for="announcement-title">Title</label>
                    <input type="text" id="announcement-title" value="${announcementData.title}" required>
                </div>
                <div class="form-group">
                    <label for="announcement-message">Message</label>
                    <textarea id="announcement-message" rows="5" required>${announcementData.message}</textarea>
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        `;
        openModal(form);
    }

    function createCharts() {
        const flightStatusCtx = document.getElementById('flightStatusChart').getContext('2d');
        new Chart(flightStatusCtx, {
            type: 'doughnut',
            data: {
                labels: ['On Time', 'Delayed', 'Cancelled'],
                datasets: [{
                    label: 'Flight Status',
                    data: [120, 20, 12],
                    backgroundColor: ['#2ECC71', '#F1C40F', '#E74C3C'],
                }]
            }
        });

        const userEngagementCtx = document.getElementById('userEngagementChart').getContext('2d');
        new Chart(userEngagementCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Active Users',
                    data: [650, 720, 800, 750, 900, 1280],
                    backgroundColor: '#3498DB',
                }]
            }
        });

        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue (in K)',
                    data: [500, 550, 620, 700, 800, 950],
                    borderColor: '#27AE60',
                    tension: 0.1
                }]
            }
        });
    }

    function loadSection(sectionName) {
        mainContent.innerHTML = sections[sectionName];
        if (sectionName === 'dashboard') {
            createCharts();
        }
        attachEventListeners(sectionName);
    }

    function attachEventListeners(sectionName) {
        if (sectionName === 'flights') {
            const addFlightBtn = document.querySelector('.add-flight-btn');
            addFlightBtn.addEventListener('click', renderAddFlightForm);

            const editFlightBtns = document.querySelectorAll('.edit-flight-btn');
            editFlightBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const flightData = {
                        flightNo: row.cells[0].textContent,
                        origin: row.cells[1].textContent,
                        destination: row.cells[2].textContent,
                        status: row.cells[3].textContent,
                    };
                    renderEditFlightForm(flightData);
                });
            });

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this flight?')) {
                        alert('Flight deleted!');
                    }
                });
            });
        }

        if (sectionName === 'users') {
            const viewUserBtns = document.querySelectorAll('.view-user-btn');
            viewUserBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const userData = {
                        name: row.cells[0].textContent,
                        email: row.cells[1].textContent,
                        tier: row.cells[2].textContent,
                    };
                    renderViewUser(userData);
                });
            });

            const blockUserBtns = document.querySelectorAll('.block-user-btn');
            blockUserBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to block this user?')) {
                        alert('User blocked!');
                    }
                });
            });
        }

        if (sectionName === 'promotions') {
            const createPromoBtn = document.querySelector('.create-promo-btn');
            createPromoBtn.addEventListener('click', renderCreatePromoForm);

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this promotion?')) {
                        alert('Promotion deleted!');
                    }
                });
            });
        }

        if (sectionName === 'arrivals') {
            const viewArrivalBtns = document.querySelectorAll('.view-arrival-btn');
            viewArrivalBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const arrivalData = {
                        name: row.cells[0].textContent,
                        passport: row.cells[1].textContent,
                        flightNo: row.cells[2].textContent,
                        submittedAt: row.cells[3].textContent,
                    };
                    renderViewArrival(arrivalData);
                });
            });
        }

        if (sectionName === 'wallet') {
            const viewTransactionsBtns = document.querySelectorAll('.view-transactions-btn');
            viewTransactionsBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const user = row.cells[0].textContent;
                    renderViewTransactions(user);
                });
            });
        }

        if (sectionName === 'rewards') {
            const addRewardBtn = document.querySelector('.add-reward-btn');
            addRewardBtn.addEventListener('click', renderAddRewardForm);

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this reward?')) {
                        alert('Reward deleted!');
                    }
                });
            });
        }

        if (sectionName === 'ev_charging') {
            const addPriceBtn = document.querySelector('.add-price-btn');
            addPriceBtn.addEventListener('click', renderAddPriceForm);

            const editPriceBtns = document.querySelectorAll('.edit-price-btn');
            editPriceBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const priceData = {
                        location: row.cells[0].textContent,
                        price: row.cells[1].textContent.replace('K ', ''),
                    };
                    renderEditPriceForm(priceData);
                });
            });

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this price?')) {
                        alert('Price deleted!');
                    }
                });
            });
        }

        if (sectionName === 'ads') {
            const addAdBtn = document.querySelector('.add-ad-btn');
            addAdBtn.addEventListener('click', renderAddAdForm);

            const editAdBtns = document.querySelectorAll('.edit-ad-btn');
            editAdBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const adData = {
                        title: row.cells[0].textContent,
                        status: row.cells[1].textContent,
                    };
                    renderEditAdForm(adData);
                });
            });

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this ad?')) {
                        alert('Ad deleted!');
                    }
                });
            });
        }

        if (sectionName === 'announcements') {
            const addAnnouncementBtn = document.querySelector('.add-announcement-btn');
            addAnnouncementBtn.addEventListener('click', renderAddAnnouncementForm);

            const editAnnouncementBtns = document.querySelectorAll('.edit-announcement-btn');
            editAnnouncementBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const row = e.currentTarget.closest('tr');
                    const announcementData = {
                        title: row.cells[0].textContent,
                        message: row.cells[1].textContent,
                    };
                    renderEditAnnouncementForm(announcementData);
                });
            });

            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(confirm('Are you sure you want to delete this announcement?')) {
                        alert('Announcement deleted!');
                    }
                });
            });
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            loadSection(section);
        });
    });

    // Initial load
    loadSection('dashboard');
});