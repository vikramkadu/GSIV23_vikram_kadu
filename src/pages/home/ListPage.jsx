import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchUpcomingMovies, searchMovies } from '../../utils/api';
import MovieCard from './MovieCard.jsx';
import Header from './Header';

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // eslint-disable-next-line
    if (searchQuery) {
      fetchSearchResults();
    } else {
      fetchMovies();
    }
  }, [searchQuery]);

  const fetchMovies = async () => {
    const data = await fetchUpcomingMovies(page);
    if (page === 1) {
      setMovies(data.results);
    } else {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
    setPage(page + 1);
    setSearchResults([]);
  };

  const fetchSearchResults = async () => {
    if (!searchQuery) return;

    const data = await searchMovies(searchQuery, page);
    setSearchResults((prevResults) => [...prevResults, ...data.results]);
    setPage(page + 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setPage(1);
    setSearchResults([]);
  };

  return (
    <div>
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <InfiniteScroll
        dataLength={searchQuery ? searchResults.length : movies.length}
        next={searchQuery ? fetchSearchResults : fetchMovies}
        hasMore={searchQuery ? page <= searchResults.total_pages : page <= 10}
      >
        <div className="movie-card-grid">
          {searchQuery.length > 0
            ? searchResults.map((movie) => (
              <MovieCard key={movie.id + movie.vote_count} movie={movie} />
            ))
            : movies.map((movie) => (
              <MovieCard key={movie.id + movie.vote_count} movie={movie} />
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListPage;
