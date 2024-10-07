const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const data = {
    items: [
        { id: 1, title: "Something 1", description: "Talking about something 1" },
        { id: 2, title: "Something 2", description: "Talking about something 2" },
        { id: 3, title: "Something 3", description: "Talking about something 3" },
        { id: 4, title: "Something 4", description: "Talking about something 4" },
    ]
};

// API endpoint
app.get('/api/items', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
