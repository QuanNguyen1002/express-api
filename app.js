// Import the Express library
const express = require('express');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Use port 3000 or a specified environment variable

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
