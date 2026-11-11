// --- IMPORTS & CONFIGURATION ---
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());

// Serve static files from the public directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// --- MOCK DATA ---
const vinyls = [
  {
    id: 1,
    title: "ayer",
    artist: "Luis Miguel",
    genre: "Pop",
    style: "Ballad",
    imageUrl: "http://localhost:5000/static/images/ayer.jpg",
    songUrl: "/music/ayer.mp3"
  },
  {
    id: 2,
    title: "My Way",
    artist: "Frank Sinatra",
    genre: "Jazz",
    style: "Swing",
    imageUrl: "http://localhost:5000/static/images/my-way.jpg",
    songUrl: "/music/my-way.mp3"
  },
  {
    id: 3,
    title: "Gotas de Fuego",
    artist: "José José",
    genre: "Ballad",
    style: "Romantic",
    imageUrl: "http://localhost:5000/static/images/gotas-de-fuego.jpg",
    songUrl: "/music/gotas-de-fuego.mp3"
  }
];

// --- API ROUTES ---
app.get('/', (req, res) => {
  res.send('Vinyls app server is running!');
});

app.get('/api/vinyls', (req, res) => {
  res.json(vinyls);
});

app.get('/api/vinyls/:id', (req, res) => {
  const targetId = parseInt(req.params.id);
  const foundVinyl = vinyls.find(v => v.id === targetId);

  if (!foundVinyl) {
    return res.status(404).json({ message: 'Vinyl not found' });
  }

  res.json(foundVinyl);
});

// --- SERVER INITIALIZATION ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});