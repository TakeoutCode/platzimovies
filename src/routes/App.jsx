import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Movie } from "@pages/Movie";
import { SearchMovies } from "@pages/SearchMovies";
import { SearchCategories } from "@pages/SearchCategories";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://takeout85.github.io/movie-app/"
          element={<Home />}
        />
        <Route
          path="https://takeout85.github.io/movie-app/movie/:id"
          element={<Movie />}
        />
        <Route
          path="https://takeout85.github.io/movie-app/search/movies/:search"
          element={<SearchMovies />}
        />
        <Route
          path="https://takeout85.github.io/movie-app/category/:name/:id"
          element={<SearchCategories />}
        />
        <Route
          path="https://takeout85.github.io/movie-app/trends/:date"
          element={<SearchCategories />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
