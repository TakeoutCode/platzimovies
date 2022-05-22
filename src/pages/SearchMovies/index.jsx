import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Search } from "@components/Search";
import { Button } from "@elements/Button";
import { ListMovies } from "@components/ListMovies";
import { Category } from "@components/Categories/Category";

import styles from "./styles.module.scss";

export const SearchMovies = () => {
  const navigate = useNavigate();
  const { name, id } = useParams();
  return (
    <div className={`${styles.searchMovies} category__colorDegradGenre--${id}`}>
      <MdOutlineArrowBackIosNew
        className={styles.arrow}
        onClick={() => navigate("/")}
      />
      {name && id ? <Category title={name} id={id} active /> : <Search />}

      <ListMovies />

      <div className={styles.showmore}>
        <Button large>Show more</Button>
      </div>
    </div>
  );
};
