import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "@hooks/useGetData";
import { Categories } from "@components/Categories";
import { Carousel } from "@components/Carousel";
import { HelmetLayout } from "@components/HelmetLayout";
import { ArrowBack } from "@components/ArrowBack";
import { CardReview } from "@components/CardReview";
import { CardReviewSkeleton } from "@components/Skeletons/CardReviewSkeleton";

import styles from "./styles.module.scss";

export const Movie = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const URL = `movie/${id}`;
  const { dataMovies, loading } = useGetData({ url: URL, dataType: "movie" });

  const backgroundImage = loading
    ? { background: "#2a0646" }
    : {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${dataMovies.backdrop_path})`,
      };
  return (
    <div className={styles.movie}>
      <HelmetLayout title={dataMovies.title} subtitle={dataMovies.overview} />
      <ArrowBack />
      <div style={backgroundImage} className={styles.movie_image} />
      <div className={styles.movie_review}>
        {loading ? <CardReviewSkeleton /> : <CardReview {...dataMovies} />}

        <Categories genres={dataMovies.genres} />
        <Carousel title="Similar movies" URL={`/movie/${id}/recommendations`} />
      </div>
    </div>
  );
};
