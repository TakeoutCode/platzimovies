import React from "react";
import { Search } from "@components/Search";
import { Trends } from "@components/Trends";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home_title}>PlatziMovies</h1>
      <Search />
      <Trends />
    </div>
  );
};
