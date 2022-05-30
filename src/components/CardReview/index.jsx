import React from "react";
import { AiFillStar } from "react-icons/ai";

import styles from "./styles.module.scss";

export const CardReview = ({ title, vote_average, overview }) => {
  return (
    <>
      <div className={styles.cardReview}>
        <h1 className={styles.cardReview__title}>{title}</h1>
        <div className={styles.cardReview__qualification}>
          <AiFillStar className={styles.cardReview__star} />
          <p className={styles.cardReview__value}>{vote_average}</p>
        </div>
      </div>
      <p className={styles.cardReview__resume}>{overview}</p>
    </>
  );
};
