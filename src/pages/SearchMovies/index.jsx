import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Search } from "@components/Search";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { useSearch } from "@hooks/useSearch";

import styles from "./styles.module.scss";

export const SearchMovies = () => {
  const navigate = useNavigate();
  const { page, setPage, movies } = useSearch();

  return (
    <div className={`${styles.searchMovies}`}>
      <MdOutlineArrowBackIosNew
        className={styles.arrow}
        onClick={() => navigate("/")}
      />
      <Search />

      <ListMovies movies={movies} />

      <div className={styles.showmore} onClick={() => setPage(page + 1)}>
        <Button large>Show more</Button>
      </div>
    </div>
  );
};
