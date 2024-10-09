const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Store inputs
let inputs = {};

// Endpoint to store inputs
app.post('/api/store-inputs', (req, res) => {
    const {
        websiteName,
        description1,
        description2,
        title1,
        title2,
        title3,
        title4,
        description3,
        description4,
        description5,
        description6,
        description7,
    } = req.body;

    inputs = {
        websiteName,
        description1,
        description2,
        title1,
        title2,
        title3,
        title4,
        description3,
        description4,
        description5,
        description6,
        description7,
    };

    res.status(200).json({ message: 'Inputs stored successfully!', inputs });
});

// Endpoint to retrieve inputs
app.get('/api/get-inputs', (req, res) => {
    res.status(200).json(inputs);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
