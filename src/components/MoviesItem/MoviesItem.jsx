import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
const MoviesItem = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id} >
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
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