import React from "react";
import { Footer } from "@components/Footer";

import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  );
};
