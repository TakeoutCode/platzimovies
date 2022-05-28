import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import styles from "./styles.module.scss";

export const ArrowBack = ({ id }) => {
  const navigate = useNavigate();
  const idArrow = id ? styles.arrow__search : styles.arrow__movies;
  return (
    <MdOutlineArrowBackIosNew
      id={idArrow}
      className={styles.arrow}
      onClick={() => navigate(-1)}
    />
  );
};
