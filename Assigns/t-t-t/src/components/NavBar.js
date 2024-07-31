import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl">
          Tic-Tac-Toe
        </Link>
        <Link to="/high-scores" className="text-white text-xl">
          High Scores
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
