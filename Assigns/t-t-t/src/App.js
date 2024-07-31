import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicTacToe from './pages/TicTacToe';
import HighScores from './pages/HighScores';
import NavBar from './components/NavBar';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(storedScores);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TicTacToe highScores={highScores} setHighScores={setHighScores} />} />
        <Route path="/high-scores" element={<HighScores highScores={highScores} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
