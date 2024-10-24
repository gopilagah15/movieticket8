// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      <h3>Select a Movie</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => onSelectMovie(movie)}>{movie.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
