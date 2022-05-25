import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useGetData } from "@hooks/useGetData";
import { Categories } from "@components/Categories";
import { Carousel } from "@components/Carousel";

import styles from "./styles.module.scss";

export const Movie = () => {
  const { id } = useParams();
  const URL = `movie/${id}`;
  const { dataMovies } = useGetData({ url: URL, dataType: "movie" });
  const navigate = useNavigate();
  return (
    <div className={styles.movie}>
      <MdOutlineArrowBackIosNew
        className={styles.arrow}
        onClick={() => navigate("/")}
      />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${dataMovies.backdrop_path})`,
        }}
        className={styles.movie_image}
      />
      <div className={styles.movie_review}>
        <div className={styles.container}>
          <h1 className={styles.movie_title}>{dataMovies.title}</h1>
          <div className={styles.movie_qualification}>
            <AiFillStar className={styles.movie_star} />
            <p className={styles.movie_value}>{dataMovies.vote_average}</p>
          </div>
        </div>
        <p className={styles.movie_resume}>{dataMovies.overview}</p>
        <Categories genres={dataMovies.genres} />
        <Carousel title="Similar movies" />
      </div>
    </div>
  );
};
