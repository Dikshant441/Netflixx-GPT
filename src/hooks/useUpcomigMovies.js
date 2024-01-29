import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addTopRatedSeries,
  addUpComingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomigMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
    //console.log(json.results); // 1
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomigMovies;
