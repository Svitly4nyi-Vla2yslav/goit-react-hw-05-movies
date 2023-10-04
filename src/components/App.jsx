
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "Layout/Layout";
import HomePage from "pages/HomePage/HomePage";

const MovieDetails = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))
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
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
