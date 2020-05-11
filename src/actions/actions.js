import {
  ADD_MOVIE_FAVORITES,
  DEL_MOVIE_FAVORITES,
  FETCH_FAVORITES } from './types'

import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE } from './types'

import axios from 'axios'

export const addMovieFavorites = movie => {
  return{
    type: ADD_MOVIE_FAVORITES,
    movie
  }
}

export const delMovieFavorites = id => {
  return{
    type: DEL_MOVIE_FAVORITES,
    id
  }
}

export const fetchFavorites = favorites => {
  console.log(favorites)
  return {
    type: FETCH_FAVORITES,
    favorites
  }
}

export const searchMovieRequest = () => dispatch => {
  dispatch({
    type: SEARCH_MOVIES_REQUEST
  })
}

export const searchMovieSuccess = () => dispatch => {
  dispatch({
    type: SEARCH_MOVIES_SUCCESS
  })
}

export const searchMovieFailure = () => dispatch => {
  dispatch({
    type: SEARCH_MOVIES_FAILURE
  })
}

export const searchMovies = (searchValue) => dispatch => { 
  dispatch({
    type: "SEARCH_MOVIES_REQUEST"
  })
  let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=84c746623f8197c77b5866ad9db15f91&query=${searchValue}`
  if(searchValue === "") API_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=84c746623f8197c77b5866ad9db15f91'
  axios.get(API_URL)
    .then(jRes => {
      if(jRes.data.total_results !== 0) {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jRes.data.results
          })
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: 'Unfortunately, your search returned no results :('
          })
        }
    })
}