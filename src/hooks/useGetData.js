import { useState, useEffect } from "react";
import axios from "axios";

export const useGetMovies = (URL, genres) => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    const fetchData = async (url, genres) => {
      const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      });

      const { data } = await api.get(url);
      genres ? setDataMovies(data.genres) : setDataMovies(data.results);
    };
    fetchData(URL, genres);
  }, []);
  return [dataMovies];
};
