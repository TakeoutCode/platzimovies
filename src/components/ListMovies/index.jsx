import React from "react";
import { Movie } from "@components/Movie";
import { CardMovieSkeleton } from "@components/Skeletons/CardMovieSkeleton";

import styles from "./styles.module.scss";

export const ListMovies = ({ movies, loading }) => {
  return (
    <figure className={styles.listMovies}>
      {loading ? (
        <CardMovieSkeleton />
      ) : (
        movies.map((movie) => <Movie list key={movie.id} {...movie} />)
      )}
    </figure>
  );
};
