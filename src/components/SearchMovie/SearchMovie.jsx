import React, { useState } from 'react'
import './SearchMovie.css'
import PropTypes from 'prop-types'
const SearchMovie = ({ onSubmit }) => {
    const [query, setQuery] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(query.trim());
        setQuery('');
    }

    const handleChange = event => {
        setQuery(event.currentTarget.value)
    }
    return (
        <form  className='form'
        onSubmit={handleSubmit}>
            
            <input
                className='input-search'
                placeholder='Search movies.....'
                onChange={handleChange}
                value={query}
                type="text"
                name="query"
            />
            <button className='search-button' type="submit">🔍</button>
        </form>
    )
}
SearchMovie.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
export default SearchMovie