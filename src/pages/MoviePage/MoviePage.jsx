import { setSearchMovies } from 'Api/ApiMovie';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import SearchMovie from 'components/SearchMovie'
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviePage = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === null) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await setSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        Notiflix.Notify.failure('Sorry, something happened, try again later 😕');
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams(searchQuery === '' ? {} : { query: searchQuery });
  };

  return (
    <div>
      <SearchMovie onSubmit={handleSubmit}/>
      {!movies.length ? null : <MoviesItem movies={movies}/>}
    </div>
  )
}

