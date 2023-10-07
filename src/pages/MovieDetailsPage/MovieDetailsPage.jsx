import { setMovieDetails } from 'Api/ApiMovie';
import { MoviesDetails } from 'components/MovieDetails/MoviesDetails';
import Notiflix from 'notiflix';
import '../../components/MovieDetails/MoviesDetails.css'
import { useRef, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backBtn = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await setMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        navigate('*');
        Notiflix.Notify.failure('Sorry, something happened, try again later 😕');
      }
    };
    fetchMovie();
  }, [movieId, navigate]);

  return (
    <>
      <Link  to={backBtn.current}>
         <button className='button-nav' type="button">Go back</button>
      </Link>
      {movie && <MoviesDetails movie={movie} />}
    </>
  );
};

export default MovieDetails;