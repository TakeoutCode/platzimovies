import React from "react";

import styles from "./styles.module.scss";

export const CardMovieSkeleton = () => {
  return (
    <>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
      <div className={styles.movie}></div>
    </>
  );
};
