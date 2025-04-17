import React from 'react';
import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
      <h2>{title}</h2>
      {/* What should go here? */}
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </div>
    </article>
  );
};

export default MovieCard;