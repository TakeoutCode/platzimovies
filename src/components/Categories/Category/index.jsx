import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const Category = ({ title, id, active }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.category}
      onClick={() => navigate(`category/${title.trim()}/${id}`)}
    >
      <div
        className={`${styles.category_icon} category__colorGenre--${id}`}
      ></div>
      <p id={active ? styles.title : null} className={styles.category_title}>
        {title}
      </p>
    </div>
  );
};
