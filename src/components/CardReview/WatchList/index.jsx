import React, { useContext } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import UserContext from "@context/index.jsx";
import api from "@utils/axiosPreset";

import styles from "./styles.module.scss";

export const WatchList = ({ id, watch, setWatch }) => {
  const { user, details } = useContext(UserContext);
  const handleClick = async () => {
    if (user.success) {
      const { data } = await api.post(
        `/account/${details.id}/watchlist?session_id=${user.session_id}`,
        {
          media_type: "movie",
          media_id: id,
          watchlist: !watch,
        }
      );
      if (data.status_code === 1 || data.status_code === 13) {
        setWatch(!watch);
      }
    }
  };
  const idWatch = watch ? styles.watched : "";
  return (
    <BsFillBookmarkFill
      id={idWatch}
      className={styles.watchList}
      onClick={handleClick}
    />
  );
};
