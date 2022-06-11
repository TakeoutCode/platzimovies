import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Liked } from "@components/CardReview/Liked";

import styles from "./styles.module.scss";

export const CardReview = ({ title, vote_average, overview, id }) => {
  return (
    <>
      <h1 className={styles.cardReview__title}>{title}</h1>
      <div className={styles.cardReview__media}>
        <div className={styles.cardReview__qualification}>
          <AiFillStar className={styles.cardReview__star} />
          <p className={styles.cardReview__value}>{vote_average}</p>
        </div>
        <Liked id={id} />
      </div>
      <p className={styles.cardReview__resume}>{overview}</p>
    </>
  );
};
