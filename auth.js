document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const passwordToggleBtn = document.querySelector('.password-toggle-btn');

    if (passwordToggleBtn) {
        passwordToggleBtn.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
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
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                window.location.href = '/form.html';
            } else {
                alert('Login failed');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const countryCode = document.getElementById('countryCode').value;
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

            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, phone: countryCode + phone, password }),
            });

            if (response.ok) {
                window.location.href = '/';
            } else {
                alert('Registration failed');
            }
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
