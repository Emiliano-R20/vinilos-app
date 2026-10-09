// --- IMPORTS & CONFIGURATION ---
const express = require('express');
const app = express();
const PORT = 5000;

// --- MOCK DATA ---
const vinyls = [
  {
    id: 1,
    title: "Ayer",
    artist: "Luis Miguel",
    genre: "Pop",
    style: "Ballad",
    imageUrl: "https://via.placeholder.com/150",
    songUrl: "/music/ayer.mp3"
  },
  {
    id: 2,
    title: "My Way",
    artist: "Frank Sinatra",
    genre: "Jazz",
    style: "Swing",
    imageUrl: "https://via.placeholder.com/150",
    songUrl: "/music/my-way.mp3"
  },
  {
    id: 3,
    title: "Gotas de Fuego",
    artist: "José José",
    genre: "Ballad",
    style: "Romantic",
    imageUrl: "https://via.placeholder.com/150",
    songUrl: "/music/gotas-de-fuego.mp3"
  }
];

// --- API ROUTES ---

// 1. Root route
app.get('/', (req, res) => {
  res.send('Vinyls app server is running!');
});

// 2. Get ALL vinyls
app.get('/api/vinyls', (req, res) => {
  res.json(vinyls);
});

// 3. Get SINGLE vinyl by ID
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