import React from 'react';
import Movie from './Movie';

export default (props) => {
  const { movies, favorites, addmovie, delmovie } = props;
  return movies.map((movie, index) => (
    <Movie favorites={favorites} key={`${index}-${movie.Title}`} movie={movie} addmovie={ addmovie } delmovie={delmovie}/>
  ))
}