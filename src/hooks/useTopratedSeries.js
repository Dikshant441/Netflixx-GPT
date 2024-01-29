import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedSeries = () => {
  const dispatch = useDispatch();

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
    getTopRatedSeries();
  }, []);
};

export default useTopratedSeries;
