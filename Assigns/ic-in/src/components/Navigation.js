import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li><button onClick={() => navigate('/')}>Home</button></li>
        <li><button onClick={() => navigate('/about')}>About</button></li>
        <li><button onClick={() => navigate('/contact')}>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
