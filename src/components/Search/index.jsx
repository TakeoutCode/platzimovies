import React from "react";
import { FcSearch } from "react-icons/fc";

import styles from "./styles.module.scss";

export const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Vengadores"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search_input}
      />
      <button className={styles.search_button}>
        <FcSearch className={styles.search_icon} />
      </button>
    </div>
  );
};
