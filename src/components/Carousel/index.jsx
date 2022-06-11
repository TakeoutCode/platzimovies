import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@elements/Button";
import { useGetData } from "@hooks/useGetData";
import { Movie } from "@components/Movie";
import { CardMovieSkeleton } from "@components/Skeletons/CardMovieSkeleton";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const Carousel = ({ title, URL }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { dataMovies, loading } = useGetData(URL, user.session_id);

  const handleClick = () => {
    navigate(`/movie-app/${title.replace(/ /g, "")}`);
  };
  const classFigure = user.success ? "" : styles.session;
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container_title}>{title}</h2>
        {dataMovies.length >= 20 && (
          <Button onClick={handleClick}>Show more</Button>
        )}
      </div>
      <figure id={classFigure} className={styles.carousel}>
        {loading ? (
          <CardMovieSkeleton />
        ) : (
          dataMovies.map((item) => (
            <Movie key={item.id} list={user.success ? false : true} {...item} />
          ))
        )}
      </figure>
    </>
  );
};
