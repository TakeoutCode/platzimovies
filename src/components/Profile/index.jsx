import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "@context/index.jsx";
import { logout } from "@utils/authenticate";

import styles from "./styles.module.scss";

export const Profile = () => {
  // const navigate = useNavigate();
  const { user, details, setUser, setDetails } = useContext(UserContext);
  const handleClick = async () => {
    const newUser = {
      success: false,
      session_id: null,
    };
    const res = await logout(user.session_id, newUser);
    if (res.success) {
      setUser(newUser);
      setDetails({});
    }
  };
  return (
    <div className={styles.profile} onClick={handleClick}>
        <p className={styles.profile__username}>{details.username}</p>
        <img
          className={styles.profile__avatar}
          src={`https://www.gravatar.com/avatar/${details.avatar?.gravatar.hash}`}
          alt={details.username}
        />
    </div>
  );
};
