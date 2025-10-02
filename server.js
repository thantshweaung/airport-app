const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const port = 8002;

// In-memory user store (for demonstration purposes)
const users = [];

// Add dummy users for testing (password for all is "password123")
const addDummyUsers = async () => {
    const dummyUsers = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '+959123456789',
            password: await bcrypt.hash('password123', 10)
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            phone: '+959987654321',
            password: await bcrypt.hash('password123', 10)
        },
        {
            firstName: 'Thant',
            lastName: 'Shwe Aung',
            email: 'thant@example.com',
            phone: '+959555123456',
            password: await bcrypt.hash('password123', 10)
        },
        {
            firstName: 'Admin',
            lastName: 'User',
            email: 'admin@airport.com',
            phone: '+959111222333',
            password: await bcrypt.hash('admin123', 10)
        }
    ];
    
    users.push(...dummyUsers);
    console.log('Added', dummyUsers.length, 'dummy users for testing');
    console.log('Test credentials:');
    console.log('- john@example.com / password123');
    console.log('- jane@example.com / password123');
    console.log('- thant@example.com / password123');
    console.log('- admin@airport.com / admin123');
};

// Initialize dummy users
addDummyUsers();

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(session({
    secret: 'your-secret-key', // Replace with a real secret key in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/form.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/admin', (req, res) => {
    console.log('Request received for /admin');
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;
        const existingUser = users.find(user => user.email === email || user.phone === phone);
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ firstName, lastName, email, phone, password: hashedPassword });
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

app.post('/register/phone', async (req, res) => {
    try {
        const { phone, password } = req.body;
        const existingUser = users.find(user => user.phone === phone);
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ phone, password: hashedPassword });
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid credentials');
        }

        req.session.user = user;
        res.redirect('/form.html');
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

app.post('/login/phone', async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = users.find(user => user.phone === phone);
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid credentials');
        }

        req.session.user = user;
        res.redirect('/form.html');
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out.');
        }
        res.redirect('/');
    });
});

app.get('/api/auth/status', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.on('error', (error) => {
    console.error('Server error:', error);
});