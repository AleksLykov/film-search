import React from 'react'
import noLogo from '../img/No-Poster-Img.jpg'

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieInfo = props => {
  const poster = props.movie.poster_path === null ? noLogo :
  baseImgUrl + props.movie.poster_path

  return (
    <div className="substrate">
      <div className="movie-info">
        <button className="button moviebtn" onClick={props.onToggle} placeholder='close modal'>x</button>
        <img className="movie-info_img" src={ poster } alt={ `The movie titled: ${props.movie.title}`}/>
        <div className="movie-info_desc">
          <div>Title: { props.movie.title }</div>
          <div>Release date: { props.movie.release_date }</div>
          <div>Popularity: { props.movie.popularity }</div>
          <div>Vote rate: { props.movie.vote_average }</div>
          <div>People voted: { props.movie.vote_count }</div>
          <div contentEditable="true" className="movie-info_overview">Overview: { props.movie.overview }</div>
        </div>
      </div>
    </div>

  )
}

export default MovieInfo