import { useState, useEffect } from "react";
import api from "@utils/axiosPreset";

export function useCategories(url) {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const axiosData = async (url) => {
      const { data } = await api.get(url);

      setDataMovies(data.genres);
      setLoading(false);
    };
    if (typeof url !== "undefined" && url !== null) {
      axiosData(url);
    }
  }, []);
  return { dataMovies, loading };
}
