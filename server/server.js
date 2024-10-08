// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Use CORS to allow requests from your frontend
app.use(cors());

// Sample data
const data = {
    websiteName: "Website Name",
    description1: "Welcome to our website where you can explore amazing content and connect with our community.",
    description2: "Discover new insights and connect with like-minded individuals.",
    description3: "Join our community today and start exploring!",
    knowAbout: {
        title: "Know About Something",
        items: [
            { id: 1, title: "Item 1", description: "Description for item 1" },
            { id: 2, title: "Item 2", description: "Description for item 2" },
            { id: 3, title: "Item 3", description: "Description for item 3" },
            { id: 4, title: "Item 4", description: "Description for item 4" }
            // Add more items as needed
        ]
    }
};

// Endpoint to get data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
