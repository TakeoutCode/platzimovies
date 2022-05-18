import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Categories } from "@components/Categories";
import { Carousel } from "@components/Carousel";

import styles from "./styles.module.scss";

export const Movie = () => {
  return (
    <div className={styles.movie}>
      <MdOutlineArrowBackIosNew className={styles.arrow} />
      <div
        style={{
          backgroundImage: `url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)`,
        }}
        className={styles.movie_image}
      />
      <div className={styles.movie_review}>
        <div className={styles.container}>
          <h1 className={styles.movie_title}>Deadpool 2</h1>
          <div className={styles.movie_qualification}>
            <AiFillStar className={styles.movie_star} />
            <p className={styles.movie_value}>7.6</p>
          </div>
        </div>
        <p className={styles.movie_resume}>Description</p>
        <Categories />
        <Carousel title="SImilar movies" />
      </div>
    </div>
  );
};
