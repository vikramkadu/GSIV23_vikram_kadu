import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../utils/api';
import Header from './Header';


const DetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id).then((data) => {
        setMovieDetails(data);
      });
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="details-container">
        <div className="movie-image">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
        </div>
        <div className="movie-details">
          <h3>{movieDetails.title} ({movieDetails.vote_average}) </h3>
          <p>
            {movieDetails.release_date} | {movieDetails.runtime} min |{' '}
            {movieDetails.director}
          </p>
          <p>Cast: {movieDetails.cast.join(', ')}</p>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
