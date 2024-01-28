import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {

const trailerOfVideos = useSelector((store) => store.movies.trailerVideo);
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
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/UGc5Tzz19UY?si=2T8kyn2VkIWKrnGv" +trailerOfVideos?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
