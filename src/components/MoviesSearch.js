import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieFavorites, delMovieFavorites, searchMovies } from '../actions/actions'
import store from '../store'

import Search from './Search'
import Sort from './Sort'
import MoviesList from './MoviesList';

const MoviesSearch = props => {
  const dispatch = useDispatch();
  const searchState = useSelector(s => s.search);
  const favoritesState = useSelector(s => s.favorite);

  // popular movie homepage
  useEffect(() => {
    store.dispatch(searchMovies(""))
  }, [])

// search movies function
  const search = searchValue => {
    store.dispatch(searchMovies(searchValue));
  }

// sorting films function
  const sort = sortValue => {
    sortValue === 'release_date' ? 
      movies.sort((a, b) => a[sortValue].slice(0,4) - b[sortValue].slice(0,4)).reverse()
      : movies.sort((a, b) => a[sortValue] - b[sortValue]).reverse()
    
    dispatch({
      type: "SEARCH_MOVIES_SUCCESS",
      payload: movies
    })
  }

  // add movie to favorites and delete movie from favorites
  const addmovie = movie => {
    store.dispatch(addMovieFavorites(movie))
  }
  const delmovie = movie => {
    store.dispatch(delMovieFavorites(movie.id))
  } 

  const { movies, errorMessage, loading } = searchState;
  const { favorites } = favoritesState;

  return (
    <div>
      <Search search={ search } />
      <Sort sort={ sort } />
        <div className="movies">
        {
          loading && !errorMessage ? (
            <span>loading...</span>
          ) : errorMessage ? (
            <div data-testid="error" className="errorMessage">{ errorMessage }</div>
          ) : (
              <MoviesList movies={movies} addmovie={addmovie} delmovie={delmovie} favorites={favorites} />
          )}
        </div>
    </div>
  )
}

export default MoviesSearch;