import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <h1 className={styles.Logo} onClick={() => navigate("/movie-app")}>
      PlatziMovies
    </h1>
  );
};
