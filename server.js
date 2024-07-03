const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 80;

const appInsights = require('applicationinsights');
appInsights.setup('<YOUR_INSTRUMENTATION_KEY>').start();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'partha' && password === '123') {
        res.send('<script>alert("Hello"); window.location.href="/";</script>');
    } else {
        res.send('<script>alert("Try again"); window.location.href="/";</script>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
