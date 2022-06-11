import React, { useState, useEffect } from "react";
import api from "@utils/axiosPreset";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({});
  const localUser = JSON.parse(localStorage.getItem("session_user"));
  useEffect(() => {
    const axiosData = async () => {
      const { data } = await api.get("/account", {
        params: {
          session_id: localUser.session_id,
        },
      });
      setDetails(data);
    };
    if (user.success) {
      console.log(user);
      axiosData();
    } else if (localUser.success && !user.success) {
      console.log("localUser");
      setUser(localUser);
      axiosData();
    }
    console.log(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, details, setDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
