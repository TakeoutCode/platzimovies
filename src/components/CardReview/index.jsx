import React, { useEffect, useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Liked } from "@components/CardReview/Liked";
import { WatchList } from "@components/CardReview/WatchList";
import UserContext from "@context/index.jsx";
import api from "@utils/axiosPreset";

import styles from "./styles.module.scss";

export const CardReview = ({ title, vote_average, overview, id }) => {
  const [like, setLike] = useState(false);
  const [watch, setWatch] = useState(false);

  const { user } = useContext(UserContext);
  useEffect(() => {
    const movieLiked = async () => {
      const { data } = await api.get(
        `/movie/${id}/account_states?session_id=${user.session_id}`
      );
      setLike(data.favorite);
      setWatch(data.watchlist);
    };

    if (user.success) {
      movieLiked();
    }
  }, []);
  return (
    <>
      <h1 className={styles.cardReview__title}>{title}</h1>
      <div className={styles.cardReview__media}>
        <div className={styles.cardReview__qualification}>
          <AiFillStar className={styles.cardReview__star} />
          <p className={styles.cardReview__value}>{vote_average}</p>
        </div>
        <Liked id={id} like={like} setLike={setLike} />
        <WatchList id={id} watch={watch} setWatch={setWatch} />
      </div>
      <p className={styles.cardReview__resume}>{overview}</p>
    </>
  );
};
