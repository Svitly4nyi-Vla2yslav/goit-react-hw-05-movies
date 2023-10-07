import React, { Suspense } from 'react'
import image from '../../images/no_image.ac6f3f0dddec64fc8ae6.jpg'
import { Link, Outlet } from 'react-router-dom';
import './MoviesDetails.css'

export const MoviesDetails = ({movie}) => {
  return (
    <div className='movie-page'>
      <div>
        <img 
        className='movie-image'
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : image
          }
          alt={movie.name}
        />
        <div>
          <div>
            <h2 className='movie-title'>
              {movie.title} {`(${movie.release_date.slice(0, 4)})`}
            </h2>
            <p className='movie-text'>
              User score: {Math.round(movie.vote_average * 10)}%
            </p>
          </div>
          <div className='container-overview'>
            <h3 className='over-title'>Overview</h3>
            <p className='movie-text'>{movie.overview}</p>
          </div>
          <div>
            <h4 className='over-title'>Genres</h4>
            <p className='movie-text'>
              {movie.genres.map(genre => genre.name).join()}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5  className='over-title'>Additional information</h5>
        <div className='container-button'>
        <button className='button-nav' type='button'>
          <li>
            <Link className='activ movie-text' to="cast">Cast</Link>
          </li></button>
          <button className='button-nav'  type="button"> <li>
            <Link className='activ movie-text'  to="reviews">Reviews</Link>
          </li></button>
         </div>
        
      </div>
      <Suspense fallback={<div className='movie-title' >Loading...⏳</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

