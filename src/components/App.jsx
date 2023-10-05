
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import { MoviePage } from "pages/MoviePage/MoviePage";

const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))
// const {MoviePage} = lazy(() => import("pages/MoviePage/MoviePage"))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={
            <Suspense fallback={'Loading...⏳'}>
              <MovieDetails /></Suspense>} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
