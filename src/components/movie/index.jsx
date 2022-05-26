import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const Movie = ({ title, poster_path, id }) => {
  const navigate = useNavigate();
  return (
    <img
      src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
      className={styles.movie__image}
      alt={title}
      onClick={() => navigate(`/movie-app/movie/${id}`)}
    />
  );
};
