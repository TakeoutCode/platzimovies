import React from "react";
import { Button } from "@elements/Button";
import { useGetMovies } from "@hooks/useGetData";
import { Movie } from "@components/movie";

import styles from "./styles.module.scss";

export const Carousel = ({ button, title }) => {
  const URL = `trending/movie/day`;
  const [dataMovies] = useGetMovies(URL);
  console.log(dataMovies);
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container_title}>{title}</h2>
        {button ? <Button>Show more</Button> : null}
      </div>
      <figure className={styles.carousel}>
        {dataMovies.map((trend) => (
          <Movie key={trend.id} {...trend} />
        ))}
      </figure>
    </>
  );
};
