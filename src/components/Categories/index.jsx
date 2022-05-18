import React, { useState } from "react";

import styles from "./styles.module.scss";

const categoriesDefault = [
  {
    category: "Action",
    color: styles.yellow,
  },
  {
    category: "Romance",
    color: styles.red,
  },
  {
    category: "Adventure",
    color: styles.green,
  },
  {
    category: "Musical",
    color: styles.aqua,
  },
  {
    category: "Comedy",
    color: styles.lightBlue,
  },
  {
    category: "Drama",
    color: styles.darkBlue,
  },
];

export const Categories = ({ categoriesMovie }) => {
  let initialState = categoriesMovie || categoriesDefault;
  return (
    <>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.categories}>
        {initialState.map((category) => (
          <div className={styles.category} key={category.category}>
            <div
              className={`${category.color} ${styles.category_colorIcon}`}
            ></div>
            <p className={styles.category_title}>{category.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};
