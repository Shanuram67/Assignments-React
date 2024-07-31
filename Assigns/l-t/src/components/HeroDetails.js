import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeroDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { details } = location.state;

  return (
    <div className="container mx-auto bg-yellow-500" >
      <h1 className="text-4xl font-bold my-4">Hero Details</h1>
      <div className="card bg-base-100 shadow-xl p-2">
        <p><strong>Fanpresident:</strong> {details.Fanpresident}</p>
        <p><strong>ID:</strong> {details.id}</p>
        <p><strong>Title:</strong> {details.title}</p>
        <p><strong>Movies Like:</strong> {details.MoviesLike}</p>
        <p><strong>He Likes:</strong> {details.HeLikes}</p>
      </div>
      <button onClick={() => navigate('/dashboard')} className="btn btn-secondary mt-4">Back</button>
      
      <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">Log Out</button>
    </div>
  );
};

export default HeroDetails;
