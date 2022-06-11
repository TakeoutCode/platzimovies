import React, { useState, useContext, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import api from "@utils/axiosPreset";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const Liked = ({ id }) => {
  const { details, user } = useContext(UserContext);
  const [like, setLike] = useState(false);
  const classLiked = like ? styles.liked : "";
  useEffect(() => {
    const movieLiked = async () => {
      const { data } = await api.get(
        `/movie/${id}/account_states?session_id=${user.session_id}`
      );
      setLike(data.favorite);
    };

    if (user.success) {
      movieLiked();
    }
  }, []);

  const liked = async () => {
    const { data } = await api.post(
      `/account/${details.id}/favorite?session_id=${user.session_id}`,
      {
        media_type: "movie",
        media_id: id,
        favorite: !like,
      }
    );
    if (data.status_code === 1 || data.status_code === 13) {
      setLike(!like);
    }
  };

  return (
    <BsHeartFill
      id={classLiked}
      className={styles.cardReview__heart}
      onClick={liked}
    />
  );
};
