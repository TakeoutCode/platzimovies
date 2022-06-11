import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navigation = (e) => {
    if (e.key) {
      if (e.key === "Enter") {
        if (search.length >= 2) {
          navigate(`/movie-app/search/movies/${search}`);
        }
      }
    } else {
      if (search.length >= 2) {
        navigate(`/movie-app/search/movies/${search}`);
      }
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Vengadores"
        value={search}
        onKeyUp={(e) => navigation(e)}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search_input}
      />
      <button
        className={styles.search_button}
        onClick={navigation}
        aria-label="search"
      >
        <FcSearch className={styles.search_icon} />
      </button>
    </div>
  );
};
