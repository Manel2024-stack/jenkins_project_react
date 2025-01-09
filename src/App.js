import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Déclarez un état pour l'heure
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Utilisez useEffect pour mettre à jour l'heure chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // met à jour chaque seconde

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => clearInterval(timer);
  }, []); // Le tableau vide [] signifie que l'effet est exécuté une seule fois, au montage du composant

  return (
    <div className="App">
      <h1>Heure en direct :</h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default App;
