import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c4082e2222a2c9d073cad7a564379fd8`);
      setMovie(response.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img className="w-full md:w-1/3 rounded-lg shadow-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold my-4">{movie.title}</h1>
          <p className="mt-4 text-lg">{movie.overview}</p>
          <p className="mt-2 text-lg"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="mt-2 text-lg"><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
