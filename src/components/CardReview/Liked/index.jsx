import React, { useContext } from "react";
import { BsHeartFill } from "react-icons/bs";
import api from "@utils/axiosPreset";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const Liked = ({ id, like, setLike }) => {
  const { details, user } = useContext(UserContext);
  const idLiked = like ? styles.liked : "";

  const liked = async () => {
    if (user.success) {
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
    }
  };

  return (
    <BsHeartFill
      id={idLiked}
      className={styles.cardReview__heart}
      onClick={liked}
    />
  );
};
