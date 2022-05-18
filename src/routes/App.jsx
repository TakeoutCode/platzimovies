import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Movie } from "@pages/Movie";
import { SearchMovies } from "@pages/SearchMovies";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search/movies" element={<SearchMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
