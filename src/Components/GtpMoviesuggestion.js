import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieDisplay, gptMovieNameDispaly } = useSelector((store) => store.gpt);
  if (!gptMovieNameDispaly) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {gptMovieNameDispaly.map((gptMovieNameDispaly, index) => (
          <MovieList
            key={gptMovieNameDispaly}
            title={gptMovieNameDispaly}
            movies={gptMovieDisplay[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
