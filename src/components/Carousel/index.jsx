import React, { useEffect, useState } from "react";
import { Button } from "@elements/Button";

import styles from "./styles.module.scss";

export const Carousel = ({ button, title }) => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const fetchTrends = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setTrends(data.results);
    };
    fetchTrends();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container_title}>{title}</h2>
        {button ? <Button>Show more</Button> : null}
      </div>
      <figure className={styles.carousel}>
        {trends.map((trend) => (
          <img
            key={trend.id}
            src={`https://image.tmdb.org/t/p/w200/${trend.poster_path}`}
            className={styles.carousel_image}
            alt={trend.title}
          />
        ))}
      </figure>
    </>
  );
};
