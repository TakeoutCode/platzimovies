import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function useSearch() {
  const [searchParams, setSearchParams] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const URL = `search/movie?language=en-US&query=${search}&page=${page}&include_adult=false`;
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
        fetchData(URL);
      } else if (page > 1) {
        fetchData(URL);
      }
    }
  }, [page, search]);

  return { page, setPage, movies, loading };
}
