const express = require('express');
const path = require('path');
const app = express();
const port = 8002; // Changed port to 8002

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    console.log('Request received for /'); // Log when root is accessed
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.on('error', (error) => {
    console.error('Server error:', error); // Log server errors
});