import { setTrendingMovies } from 'Api/ApiMovie';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await setTrendingMovies()
        setMovies(data.results);

      } catch (error) {
        Notiflix.Notify.failure('Sorry, something happened, try again later 😕');
      }
    }
    fetchMovies()
  }, [])


  return (
    <div>
      <h2>Trending today </h2>
      {movies && <MoviesItem movies={movies} />}
    </div>
  )
}

export default HomePage;