import { setMovieReviews } from 'Api/ApiMovie';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await setMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        Notiflix.Notify.failure('Sorry, something happened, try again later 😕');
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>  {reviews.length ? (
      <ul>
        {reviews.map(({ author, content }) => {
          return (
            <li key={author}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <span>We don't have any reviews for this movie.</span>
    )}
    </div>
  )
}

export default Reviews;