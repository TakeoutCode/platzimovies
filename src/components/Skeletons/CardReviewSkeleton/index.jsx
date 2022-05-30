import React from "react";
import { AiFillStar } from "react-icons/ai";

import styles from "./styles.module.scss";

export const CardReviewSkeleton = () => {
  return (
    <div className={styles.review}>
      <div className={styles.review__qualification}>
        <div className={styles.review__title}></div>
        <AiFillStar className={styles.review__star} />
      </div>
      <div className={styles.review__resume}>
        <div className={styles.review__text}></div>

        <div className={styles.review__text}></div>
        <div className={styles.review__text}></div>
        <div className={styles.review__text}></div>
      </div>
    </div>
  );
};
