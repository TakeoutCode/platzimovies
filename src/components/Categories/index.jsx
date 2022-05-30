import React from "react";
import { useCategories } from "@hooks/useCategories";
import { Category } from "@components/Categories/Category";
import { CategoriesSkeleton } from "@components/Skeletons/CategorySkeleton";

import styles from "./styles.module.scss";

export const Categories = ({ genres }) => {
  const URL = `genre/movie/list?language=en-US`;

  const { dataMovies, loading } = useCategories({
    url: genres ? null : URL,
  });
  const dataGenres = genres || dataMovies;
  return (
    <>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.categories}>
        {loading ? (
          <CategoriesSkeleton />
        ) : (
          dataGenres.map((category) => (
            <Category
              key={category.id}
              title={category.name}
              id={category.id}
            />
          ))
        )}
      </div>
    </>
  );
};
