import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addTopRatedSeries,
  addUpComingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomigMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector(
    (store) => store.movies.upComingMovies
  );

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
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomigMovies;
