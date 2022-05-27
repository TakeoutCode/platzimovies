import React from "react";
import { Carousel } from "@components/Carousel";
import { Categories } from "@components/Categories";

import styles from "./styles.module.scss";

export const Trends = () => {
  return (
    <div className={styles.trends}>
      <Carousel button title="Trends" URL="trending/movie/day" />
      <Categories />
    </div>
  );
};
