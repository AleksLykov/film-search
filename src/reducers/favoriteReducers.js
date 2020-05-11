import { ADD_MOVIE_FAVORITES,
  DEL_MOVIE_FAVORITES, FETCH_FAVORITES } from '../actions/types'

const initialState = {
  movies: [],
  favorites: {},
  movie: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVORITES:
      const { movie } = action;
      return {
        ...state,
        favorites: {...state.favorites, [movie.id]: movie}
      }
    case DEL_MOVIE_FAVORITES:
      const favorites = {...state.favorites};
      delete favorites[action.id];

      return {
        ...state,
        favorites
      }
    case FETCH_FAVORITES:
      const favs = {...state.favorites};
      return {
        ...state,
        favs
      }
    
    default:
      return state
  }
}