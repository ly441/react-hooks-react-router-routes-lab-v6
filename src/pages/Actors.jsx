
// pages/Actors.jsx
import React, { useState, useEffect } from 'react';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/actors') // Fetch actors from the JSON server
      .then(res => res.json())
      .then(data => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
