import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { Category } from "@components/Categories/Category";
import { useGetData } from "@hooks/useGetData";
import { HelmetLayout } from "@components/HelmetLayout";
import { ArrowBack } from "@components/ArrowBack";

import styles from "./styles.module.scss";

export const SearchCategories = () => {
  window.scrollTo(0, 0);
  const { name, id, date } = useParams();
  let URL = `discover/movie?with_genres=${id}`;
  if (date) {
    URL = "trending/movie/day";
  }
  const { dataMovies, page, setPage, loading } = useGetData(URL);

  return (
    <div className={`${styles.searchMovies} category__colorDegradGenre--${id}`}>
      <HelmetLayout title={name} subtitle={name} />
      <ArrowBack id />
      <Category title={date ? `Day Trends` : name} id={id} active />

      <ListMovies movies={dataMovies} loading={loading} />

      <div className={styles.showmore} onClick={() => setPage(page + 1)}>
        <Button large>Show more</Button>
      </div>
    </div>
  );
};
