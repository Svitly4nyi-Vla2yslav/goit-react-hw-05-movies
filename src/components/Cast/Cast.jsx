import { setMovieCredits } from 'Api/ApiMovie';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom';
import image from '../../images/no_image.ac6f3f0dddec64fc8ae6.jpg'
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await setMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        Notiflix.Notify.failure('Sorry, something happened, try again later 😕');
      }
    }
    fetchCast()

  }, [movieId])



  return (
    <div>
      {cast.length ? (
        <ul>
          {cast.map(cast => {
            return (
              <li key={cast.id}>
                <img src={
                  cast.profile_path !== null
                    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                    : image
                } alt={cast.name} />
                <p>{cast.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (<p>We don't have any cast for this movie.</p>)}
    </div>
  );
};

export default Cast;