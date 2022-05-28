import React from "react";
import { Search } from "@components/Search";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { useSearch } from "@hooks/useSearch";
import { HelmetLayout } from "@components/HelmetLayout";
import { ArrowBack } from "@components/ArrowBack";

import styles from "./styles.module.scss";

export const SearchMovies = () => {
  window.scrollTo(0, 0);
  const { page, setPage, movies } = useSearch();

  return (
    <div className={`${styles.searchMovies}`}>
      <HelmetLayout title="Search Movies" subtitle="Search" />
      <ArrowBack id />
      <Search />

      <ListMovies movies={movies} />

      <div className={styles.showmore} onClick={() => setPage(page + 1)}>
        <Button large>Show more</Button>
      </div>
    </div>
  );
};
