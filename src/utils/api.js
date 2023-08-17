import axios from 'axios';

const API_KEY = 'ef476e249f3f850f98522db5e14e2b4b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log("response",response.data)

    const movieDetails = {
      title: response.data.title,
      vote_average: response.data.vote_average,
      release_date: response.data.release_date,
      runtime: response.data.runtime,
      director: 'Director', 
      cast: ['Actor 1', 'Actor 2'],
      overview: response.data.overview,
      poster_path:response.data.poster_path
    };
    return movieDetails;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};


