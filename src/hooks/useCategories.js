import { useState, useEffect } from "react";
import axios from "axios";

export function useCategories({ url }) {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (url) => {
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

      setDataMovies(data.genres);
      setLoading(false);
    };
    if (typeof url !== "undefined" && url !== null) {
      fetchData(url);
    }
  }, []);
  return { dataMovies, loading };
}
