import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "@utils/axiosPreset";
import UserContext from "@context/index";

export function useGetData(url) {
  const [dataMovies, setDataMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { user } = useContext(UserContext);
  useEffect(() => {
    const axiosData = async (url) => {
      const { data } = await api.get(url, {
        params: {
          page: page,
          session_id: user.session_id,
        },
      });

      if (data.results) {
        if (id === categoryId && page > 1) {
          setDataMovies([...dataMovies, ...data.results]);
        } else {
          setDataMovies(data.results);
          setPage(1);
        }
      } else {
        setDataMovies(data);
      }
      setCategoryId(id);
      setLoading(false);
    };

    axiosData(url);
  }, [page, id]);
  return { page, setPage, dataMovies, loading };
}
