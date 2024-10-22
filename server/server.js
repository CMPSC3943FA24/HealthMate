 // Import necessary packages
const express = require('express');  // Web framework
const cors = require('cors');        // Enable Cross-Origin Resource Sharing
require('dotenv').config();          // Load environment variables

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000; // Set port from environment variable or default to 5000

// Middleware
app.use(cors());                      // Use CORS for all routes
app.use(express.json());              // Parse incoming JSON requests

// Basic route for testing
app.get('/', (req, res) => {
    res.send('HealthMate API is running!'); // Response for the root route
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server status
});
