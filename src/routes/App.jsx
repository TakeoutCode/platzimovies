import React, {Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { SearchMovies } from "@pages/SearchMovies";

const LazyMovie = lazy(() => import("@pages/Movie"));
const LazyCategories = lazy(() => import("@pages/SearchCategories"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/movie-app/" element={<Home />} />
          <Route path="/movie-app/movie/:id" element={<LazyMovie />} />
          <Route
            path="/movie-app/search/movies/:search"
            element={<SearchMovies />}
          />
          <Route
            path="/movie-app/category/:name/:id"
            element={<LazyCategories />}
          />
          <Route path="/movie-app/trends/:date" element={<LazyCategories />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
