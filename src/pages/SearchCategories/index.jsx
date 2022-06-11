import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { Category } from "@components/Categories/Category";
import { useGetData } from "@hooks/useGetData";
import { HelmetLayout } from "@components/HelmetLayout";
import { ArrowBack } from "@components/ArrowBack";

import styles from "./styles.module.scss";

export const SearchCategories = ({ URL, title }) => {
  window.scrollTo(0, 0);
  const { name, id } = useParams();
  if (name && id) {
    URL = `discover/movie?with_genres=${id}`;
  }

  const { dataMovies, page, setPage, loading } = useGetData(URL);

  return (
    <div className={`${styles.searchMovies} category__colorDegradGenre--${id}`}>
      <HelmetLayout title={name} subtitle={name} />
      <ArrowBack id />
      <Category title={title ? title : name} id={id} active />

      <ListMovies movies={dataMovies} loading={loading} />

      <div className={styles.showmore}>
        <Button large onClick={() => setPage(page + 1)}>
          Show more
        </Button>
      </div>
    </div>
  );
};
