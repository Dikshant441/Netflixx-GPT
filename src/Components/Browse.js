import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedSeries from "../hooks/useTopratedSeries";
import useUpcomigMovies from "../hooks/useUpcomigMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedSeries();
  useUpcomigMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
