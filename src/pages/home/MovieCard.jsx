import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`}>
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className="movie-infos">
          <h2 className="movie-info">{movie.title} ({movie.vote_average})</h2>
          <p >{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
