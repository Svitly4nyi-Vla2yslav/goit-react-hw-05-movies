import React, { Suspense } from 'react'
import image from '../../images/no_image.ac6f3f0dddec64fc8ae6.jpg'
import { Link, Outlet } from 'react-router-dom';

export const MoviesDetails = ({movie}) => {
  return (
    <>
      <div>
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : image
          }
          alt={movie.name}
        />
        <div>
          <div>
            <h2>
              {movie.title} {`(${movie.release_date.slice(0, 4)})`}
            </h2>
            <p>
              User score: {Math.round(movie.vote_average * 10)}%
            </p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <p>
              {movie.genres.map(genre => genre.name).join()}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5>Additional information</h5>
        <button type='button'>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </button>
      </div>
      <Suspense fallback={<div>Loading...⏳</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

