import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const Movie = ({ title, poster_path, id, list }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const element = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);
  return (
    <>
      {poster_path ? (
        <img
          id={list && styles.movie__image_list}
          className={styles.movie__image}
          src={show ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ""}
          loading="lazy"
          alt={title}
          ref={element}
          onClick={() => navigate(`/movie-app/movie/${id}`)}
        />
      ) : (
        <div
          id={list && styles.movie__image_list}
          className={styles.movie__image}
          ref={element}
          onClick={() => navigate(`/movie-app/movie/${id}`)}
        >
          <p>{title}</p>
        </div>
      )}
    </>
  );
};
