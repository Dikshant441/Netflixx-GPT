import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = () => {

    const dispatch = useDispatch();
    //  fetch Trailer Video
  
    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/572802/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();
      console.log(json);
  
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
      getMoviesVideo();
    }, []);
  
};

export default useMovieTrailer;
