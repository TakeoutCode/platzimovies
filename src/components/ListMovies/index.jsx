import React from "react";
import { Movie } from "@components/movie";

import styles from "./styles.module.scss";

export const ListMovies = ({ movies }) => {
  return (
    <figure className={styles.listMovies}>
      {movies.map(
        (movie) => movie.poster_path && <Movie key={movie.id} {...movie} />
      )}
    </figure>
  );
};
