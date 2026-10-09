import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Estado para almacenar los vinilos
  const [vinyls, setVinyls] = useState([]);
  // 2. Estado para manejar la carga (Loading)
  const [loading, setLoading] = useState(true);

  // 3. useEffect para pedir los datos al servidor cuando el componente se monta
  useEffect(() => {
    fetch('http://localhost:5000/api/vinyls')
      .then((response) => response.json())
      .then((data) => {
        setVinyls(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching vinyls:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Vinyl Web</h1>
        <p>Welcome to your personal music library!</p>
      </header>

      <main className="content">
        {loading ? (
          <p>Loading collection...</p>
        ) : (
          <div className="vinyl-grid">
            {vinyls.map((vinyl) => (
              <div key={vinyl.id} className="vinyl-card">
                <img src={vinyl.imageUrl} alt={vinyl.title} className="vinyl-cover" />
                <h3>{vinyl.title}</h3>
                <p className="artist">{vinyl.artist}</p>
                <span className="genre-tag">{vinyl.genre} - {vinyl.style}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;