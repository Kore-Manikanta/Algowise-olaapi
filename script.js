// server.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Mock ride data
const rides = [
  { id: '1', name: 'Ride 1', lat: 17.3616, lng: 78.4747 },
  { id: '2', name: 'Ride 2', lat: 17.4448, lng: 78.3878 },
  { id: '3', name: 'Ride 3', lat: 17.4038, lng: 78.4011 },
  { id: '4', name: 'Ride 4', lat: 17.4250, lng: 78.4784 },
  { id: '5', name: 'Ride 5', lat: 17.2410, lng:  78.6465 },
];

app.get('/api/rides', (req, res) => {
  res.json(rides);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
