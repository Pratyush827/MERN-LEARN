const express= require('express');
const app = express();
const port = 3000;

app.use(express.json());

//dummy variables

let hotels = [
    {id: 1, name: 'Hotel A', location: 'location A'},
    {id: 2, name: 'Hotel B', location: 'location B'},
    {id: 3, name: 'Hotel C', location: 'location C'},
    {id: 4, name: 'Hotel D', location: 'location D'},
];

app.get('/api/hotels',(req,res) =>{
    res.json(hotels);
});

//fetch hotel by id using params 
app.get('/api/hotels/:id', (req, res) => {
    const id = parseInt(req.params.id); // convert to number
    const hotel = hotels.find(h => h.id === id);

    if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
    }

    res.json(hotel);
});

