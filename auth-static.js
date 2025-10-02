document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const passwordToggleBtn = document.querySelector('.password-toggle-btn');

    // Dummy users for static version
    const dummyUsers = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '+959123456789',
            password: 'password123'
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            phone: '+959987654321',
            password: 'password123'
        },
        {
            firstName: 'Thant',
            lastName: 'Shwe Aung',
            email: 'thant@example.com',
            phone: '+959555123456',
            password: 'password123'
        },
        {
            firstName: 'Admin',
            lastName: 'User',
            email: 'admin@airport.com',
            phone: '+959111222333',
            password: 'admin123'
        }
    ];

    // Store dummy users in localStorage if not already there
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(dummyUsers));
    }

    if (passwordToggleBtn) {
        passwordToggleBtn.addEventListener('click', () => {
            const passwordInput = passwordToggleBtn.parentElement.querySelector('input[type="password"], input[type="text"]');
            const passwordToggle = passwordToggleBtn.querySelector('.password-toggle');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.textContent = 'visibility';
            } else {
                passwordInput.type = 'password';
                passwordToggle.textContent = 'visibility_off';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(user => user.email === email);

            if (!user || user.password !== password) {
                alert('Invalid credentials');
                return;
            }

            // Store logged in user
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('userLoggedIn', 'true');
            
            // Redirect to form
            window.location.href = 'form.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const existingUser = users.find(user => user.email === email || user.phone === phone);
            
            if (existingUser) {
                alert('User already exists');
                return;
            }

            const newUser = { firstName, lastName, email, phone, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // Auto login after registration
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            localStorage.setItem('userLoggedIn', 'true');
            
            alert('Registration successful!');
            window.location.href = 'form.html';
        });
    }

    const googleLoginBtn = document.querySelector('.google-btn');
    const appleLoginBtn = document.querySelector('.apple-btn');

    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', () => {
            alert('Google login is not yet implemented.');
        });
    }

    if (appleLoginBtn) {
        appleLoginBtn.addEventListener('click', () => {
            alert('Apple login is not yet implemented.');
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});