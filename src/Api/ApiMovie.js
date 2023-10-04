import axios from 'axios';

const api_key = '0c1275ede1cd971eed12c7e14e906afa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies(endpoint) {
  const response = await axios.get(endpoint);
  return response.data;
}

export function setTrendingMovies() {
  return fetchMovies(`/trending/movie/day?api_key=${api_key}`);
}

export function setSearchMovies(query) {
  return fetchMovies(`/search/movie?api_key=${api_key}&query=${query}`);
}

export function setMovieDetails(movieId) {
  return fetchMovies(`/movie/${movieId}?api_key=${api_key}&language=en-US`);
}

export function setMovieCredits(movieId) {
  return fetchMovies(
    `/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
}

export function setMovieReviews(movieId) {
  return fetchMovies(
    `/movie/${movieId}/reviews?api_key=${api_key}&language=en-US`
  );
}