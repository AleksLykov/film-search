import React from 'react'
import MoviesList from './MoviesList'
import { useSelector, useDispatch } from 'react-redux'
import { delMovieFavorites } from '../actions/actions';

const Favorites = props => {
  const { favorites } = useSelector(s => s.favorite);
  const dispatch = useDispatch();
  const movies = Object.values(favorites)

  return (
    <div className="">
      <div className="movies">
        <MoviesList favorites={favorites} movies={movies}
          addmovie={() => {}} delmovie={({id}) => dispatch(delMovieFavorites(id))} /> 
      </div>
    </div>

  )
}

export default Favorites