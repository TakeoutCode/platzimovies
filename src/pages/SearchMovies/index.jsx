import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Search } from "@components/Search";
import { Button } from "@elements/Button";

import styles from "./styles.module.scss";

export const SearchMovies = () => {
  return (
    <div className={styles.searchMovies}>
      <MdOutlineArrowBackIosNew className={styles.arrow} />

      <Search />

      <figure className={styles.listMovie}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          className={styles.listMovie_image}
          alt=""
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          className={styles.listMovie_image}
          alt=""
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          className={styles.listMovie_image}
          alt=""
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          className={styles.listMovie_image}
          alt=""
        />
      </figure>
      <div className={styles.showmore}>
        <Button large>Show more</Button>
      </div>
    </div>
  );
};
