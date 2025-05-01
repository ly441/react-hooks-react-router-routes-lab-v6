
// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies') // Assuming json-server is running
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
