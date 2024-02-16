import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedSeries = () => {
  const dispatch = useDispatch();

  const topRatedSeries = useSelector(
    (store) => store.movies.topRatedSeries
  );

  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();
    //console.log(json.results); // 1
    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopratedSeries;
