import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c4082e2222a2c9d073cad7a564379fd8`);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-4">Popular Movies</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="card bg-base-100 shadow-xl">
            <figure><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
