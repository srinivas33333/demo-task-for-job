import React from 'react'
import { useLocation } from 'react-router-dom';

import './styles/details-styles.css'
import notTheirPic from '../assets/images/not-available.png';

function MoveDetails() {
  const { state } = useLocation();
  const movie = state.movie
  return (
    <div className='movieDetails'>
      <div className='movie-img'>
        <figure>
          <img src={ `${movie.posterUrl || notTheirPic}` } alt="movie pic" />
        </figure> 
      </div>
      <div className='details'>
        <h3>{movie?.title || 'no-title mentioned' }</h3>
        <div>
          <div>

          <span>{ movie?.year || '---'}&nbsp; |&nbsp; </span>
            <span> { movie?.runtime || '---'}&nbsp; |&nbsp; </span>
          <span>{ movie?.director || '---'}</span>
          </div>
          <div>
            <strong>cast:</strong> &nbsp; &nbsp; { movie?.actors || '----'}
          </div>
        </div>
        <div>
          <strong>Movie Plot:</strong> &nbsp; {movie?.plot}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default MoveDetails