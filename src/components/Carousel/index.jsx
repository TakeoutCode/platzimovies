import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@elements/Button";
import { useGetData } from "@hooks/useGetData";
import { Movie } from "@components/movie";

import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";

export const Carousel = ({ button, title }) => {
  const navigate = useNavigate();
  const URL = `trending/movie/day`;
  const { dataMovies } = useGetData({ url: URL, category: false });
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container_title}>{title}</h2>
        {button ? (
          <Button onClick={() => navigate(`trends/day`)}>Show more</Button>
        ) : null}
      </div>
      <figure className={styles.carousel}>
        {dataMovies.map((trend) => (
          <Movie key={trend.id} {...trend} />
        ))}
      </figure>
    </>
  );
};
