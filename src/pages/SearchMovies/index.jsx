import React from "react";
import { Search } from "@components/Search";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { useSearch } from "@hooks/useSearch";
import { HelmetLayout } from "@components/HelmetLayout";
import { ArrowBack } from "@components/ArrowBack";
import { Logo } from "@components/Logo";

import styles from "./styles.module.scss";

export const SearchMovies = () => {
  window.scrollTo(0, 0);
  const { page, setPage, movies, loading } = useSearch();

  return (
    <div className={`${styles.searchMovies}`}>
      <HelmetLayout title="Search Movies" subtitle="Search" />
      <ArrowBack id />
      <Logo list />

      <Search />

      <ListMovies movies={movies} loading={loading} />

      <div className={styles.showmore}>
        <Button large onClick={() => setPage(page + 1)}>
          Show more
        </Button>
      </div>
    </div>
  );
};
