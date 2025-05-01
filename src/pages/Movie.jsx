
// pages/Movie.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`) // Fetching a single movie by ID
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
