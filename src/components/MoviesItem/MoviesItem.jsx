import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MoviesItem.css'
import image from '../../images/no_image.ac6f3f0dddec64fc8ae6.jpg'
const MoviesItem = ({ movies }) => {
    const location = useLocation();
    if (movies.length === 0) {
        movies.title = 'Nothing was found for your request.';
      }
    return (
        <div className='container'>
            <ul>
                {movies.map(movie => {
                    return (
                        <li className='gallery' key={movie.id} >
                            <Link to={`/movies/${movie.id}`} state={{ from: location }} className='link-image'>
                            <div className='image-container'><img src={ movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : image} alt={movie.title}/></div>
                            
                                <p>{movie.title}</p>
                            </Link>
                          
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
MoviesItem.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesItem