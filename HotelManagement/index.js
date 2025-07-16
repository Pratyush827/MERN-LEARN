const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// POST route to receive hotel data
app.post('/api/hotels', (req, res) => {
    const hotel = req.body;
    console.log("Hotel data received:", hotel);

    if (hotel.name && hotel.location) {
        res.status(201).json({ message: "Hotel data saved successfully", hotel });
    } else {
        res.status(400).json({ error: "Missing hotel name or location" });
    }
});

// GET route to return static hotel data
app.get('/api/hotels', (req, res) => {
    const hotels = [
        { id: 1, name: 'Hotel A', location: 'Location A' },
        { id: 2, name: 'Hotel B', location: 'Location B' },
    ];
    res.status(200).json(hotels);
});

// Start the server (only once!)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
