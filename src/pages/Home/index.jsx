import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@components/Search";
import { Carousel } from "@components/Carousel";
import { Categories } from "@components/Categories";
import { Button } from "@elements/Button";
import { Profile } from "@components/Profile";
import { Logo } from "@components/Logo";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const Home = () => {
  const { user, details } = useContext(UserContext);
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <Logo />
        {user.success ? (
          <Profile />
        ) : (
          <Button onClick={() => navigate("/movie-app/log-in")}>Login</Button>
        )}
      </div>
      <Search />
      <Carousel title="Trends" URL="/trending/movie/day" />
      {details.id && (
        <>
          <Carousel
            title="Favorites"
            URL={`/account/${details.id}/favorite/movies`}
          />
          <Carousel
            title="Watch List"
            URL={`/account/${details.id}/watchlist/movies`}
          />
        </>
      )}

      <Categories />
    </div>
  );
};
