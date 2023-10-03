
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "Layout/Layout";
import CastPage from "pages/CastPage/CastPage";
import HomePage from "pages/HomePage/HomePage";
import MovieDetails from "pages/MovieDetailsPage/MovieDetailsPage";
import ReviewsPage from "pages/ReviewsPage/ReviewsPage";
const SearchMoviePage = lazy(() => import("pages/SearchMoviePage/SearchMoviePage"))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMoviePage />} />
          <Route path="movies/:movieId" element={
            <Suspense fallback={'Loading...⏳'}>
              <MovieDetails /></Suspense>} >
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
