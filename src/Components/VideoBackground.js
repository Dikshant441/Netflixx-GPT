import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //fetch trailer video && updating the store with trailer video data

  const trailerOfVideos = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/UGc5Tzz19UY?si=2T8kyn2VkIWKrnGv" +
          trailerOfVideos?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
