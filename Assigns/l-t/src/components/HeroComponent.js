import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroComponent = ({ hero }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hero/${hero.id}`, { state: { details: hero.details } });
  };

  return (
    <div className="card bg-base-100 shadow-xl bg-yellow-500">
      <div className="card-body bg-yellow-500">
        <h2 className="card-title bg-green-200">{hero.title}</h2>
        <p>{hero.description}</p>
        <button onClick={handleClick} className="btn btn-primary mt-4">View Details</button>
      </div>
    </div>
  );
};

export default HeroComponent;
