import React, { useContext } from "react";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";
import api from "@utils/axiosPreset";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const RatedMovies = ({ rated, setRated, id }) => {
  const { user } = useContext(UserContext);
  const handleClick = async (e) => {
    if (e > 0) {
      const { data } = await api.post(
        `https://api.themoviedb.org/3/movie/${id}/rating?session_id=${user.session_id}`,
        {
          value: e * 2,
        }
      );
      if (data.success) {
        setRated(e);
      }
    } else {
      const { data } = await api.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating?session_id=${user.session_id}`,
        {
          value: e,
        }
      );
      if (data.success) {
        setRated(0);
      }
    }
  };
  return (
    <Rating
      initialRating={rated}
      className={styles.rated}
      fractions={2}
      emptySymbol={<BsStar className={styles.star__icon} />}
      fullSymbol={<BsStarFill className={styles.star__icon} />}
      onChange={(value) => handleClick(value)}
    />
  );
};
