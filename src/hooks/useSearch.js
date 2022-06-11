import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "@utils/axiosPreset";

export function useSearch() {
  const [searchParams, setSearchParams] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const URL = `search/movie?language=en-US&include_adult=false`;
  useEffect(() => {
    const axiosData = async (url) => {
      const { data } = await api.get(url, {
        params: {
          query: search,
          page: page,
        },
      });
      if (search === searchParams && page > 1) {
        setMovies([...movies, ...data.results]);
      } else {
        setMovies(data.results);
        setPage(1);
      }
      setSearchParams(search);
      setLoading(false);
    };
    if (typeof search !== "undefined" && search.length >= 2) {
      if (search !== searchParams) {
        axiosData(URL);
      } else if (page > 1) {
        axiosData(URL);
      }
    }
  }, [page, search]);

  return { page, setPage, movies, loading };
}
