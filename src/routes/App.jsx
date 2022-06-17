import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "@routes/PrivateRoute";
import UserContext from "@context/index.jsx";

import { Home } from "@pages/Home";
import { SearchMovies } from "@pages/SearchMovies";
import { Movie } from "@pages/Movie";
import { SearchCategories } from "@pages/SearchCategories";
import { Login } from "@pages/Login";
import { Profile } from "@pages/Profile";
import { NotFound } from "@pages/NotFound";

export const App = () => {
  const { user, details } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movie-app/" replace />} />
        <Route path="/movie-app/" element={<Home />} />
        <Route path="/movie-app/movie/:id" element={<Movie />} />
        <Route
          path="/movie-app/search/movies/:search"
          element={<SearchMovies />}
        />
        <Route
          path="/movie-app/category/:name/:id"
          element={<SearchCategories />}
        />
        <Route
          path="/movie-app/trends"
          element={<SearchCategories URL="trending/movie/day" title="Trends" />}
        />
        <Route
          path="/movie-app/similarmovies/:id"
          element={
            <SearchCategories
              URL="/movie/idMovie/recommendations"
              title="Similar"
            />
          }
        />
        <Route
          path="/movie-app/favorites"
          element={
            <PrivateRoute
              page={
                <SearchCategories
                  URL={`/account/${details.id}/favorite/movies`}
                  title="Favorites"
                />
              }
            />
          }
        />
        <Route
          path="/movie-app/watchlist"
          element={
            <PrivateRoute
              page={
                <SearchCategories
                  URL={`/account/${details.id}/watchlist/movies`}
                  title="Watch List"
                />
              }
            />
          }
        />
        <Route
          path="/movie-app/profile"
          element={<PrivateRoute page={<Profile />} />}
        />
        <Route path="/movie-app/log-in" element={!user.success && <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
