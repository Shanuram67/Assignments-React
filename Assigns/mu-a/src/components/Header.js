import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="bg-primary text-primary-content">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Music Player
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          {user ? (
            <button onClick={handleLogout} className="btn btn-ghost">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;