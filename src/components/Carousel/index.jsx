import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@elements/Button";
import { useGetData } from "@hooks/useGetData";
import { Movie } from "@components/Movie";
import { CardMovieSkeleton } from "@components/Skeletons/CardMovieSkeleton";

import styles from "./styles.module.scss";

export const Carousel = ({ button, title, URL }) => {
  const navigate = useNavigate();

  const { dataMovies, loading } = useGetData({ url: URL, category: false });
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container_title}>{title}</h2>
        {button ? (
          <Button onClick={() => navigate(`/movie-app/trends/day`)}>
            Show more
          </Button>
        ) : null}
      </div>
      <figure className={styles.carousel}>
        {loading ? (
          <CardMovieSkeleton />
        ) : (
          dataMovies.map((trend) => <Movie key={trend.id} {...trend} />)
        )}
      </figure>
    </>
  );
};
