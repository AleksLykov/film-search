import React, { useState } from "react"
import noLogo from '../img/No-Poster-Img.jpg'

import MovieInfo from './MovieInfo'

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const Movie = props => {
  const { movie, addmovie, delmovie, favorites } = props
  const [ showModal, setShowModal ] = useState(true)

  const poster = movie.poster_path === null ? noLogo :
    baseImgUrl + movie.poster_path

  const toggleFavorites = e => {
    if(findInFavorites(movie)) {
      delmovie(movie)
    } else {
      addmovie(movie)
    }
  }

  const findInFavorites = movie => {
    return !!favorites[movie.id];

  }
  const movieInFavorite = findInFavorites(props.movie);

  return (
    <div className="movie">
      { !showModal ? <MovieInfo onToggle={()=> setShowModal(!showModal)} showModal={showModal} movie={ movie }/> : null }
      <h3 data-testid="success" className="movie-header">{ movie.title }</h3>
      <div className="movie_img">
        <img src={ poster } alt={ `The movie titled: ${props.movie.title}`} onClick={() => setShowModal(!showModal)}/>
        <div className="info_view">
          <i title="add to Watch later" data-testid="favbtn" onClick={ toggleFavorites } className={`fas fa-star ${ movieInFavorite ? "fav" : " " }`}></i>
        </div>
      </div>
      <p className="movie-year">( { movie.release_date ? movie.release_date.slice(0,4) : 'unknown' } )</p>
    </div>
  )
}

Movie.defaultProps = {
  favorites: {}
}

export default Movie