import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">MovieDB</Link></h1>
        <nav>
          <Link className="px-3" to="/dashboard">Dashboard</Link>
          <Link className="px-3" to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
