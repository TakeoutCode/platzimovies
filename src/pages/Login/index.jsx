import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@components/ArrowBack";
import { Button } from "@elements/Button";
import { login, signup } from "@utils/authenticate";
import UserContext from "@context/index.jsx";

import styles from "./styles.module.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login({ username, password });
    if (user.success) {
      setUser(user);
      navigate("/movie-app/");
    }
  };

  return (
    <div className={styles.Login}>
      <ArrowBack id />
      <div className={styles.Login__container}>
        <h1 className={styles.Login__title}>Login</h1>
        <form className={styles.Login__form} onSubmit={handleSubmit}>
          <input
            className={styles.Login__input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className={styles.Login__input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button large onClick={handleSubmit}>
            Log in
          </Button>
          <p className={styles.Login__text} onClick={signup}>
            no tienes una cuenta?
            <a> sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};
