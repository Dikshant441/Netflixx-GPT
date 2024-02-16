import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) => {
  //fetch trailer video && updating the store with trailer video data

    const dispatch = useDispatch();

    const trailerVideo = useSelector(
      (store) => store.movies.trailerVideo
    );
  
    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +  movieId +"/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json);  4
  
      // filter Trailers from multiple videos
      const filterData = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      // Have more than 1 Trailer result filter only one at a time
      const trailer = filterData.length ? filterData[0] : json.results[0];
      //console.log(trailer); // 3
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      !trailerVideo && getMoviesVideo();
    }, []);
  
};

export default useMovieTrailer;
