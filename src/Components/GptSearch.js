import React from "react";
import GptSearchBar from "./GptSearchBar";
import GtpMoviesuggestion from "./GtpMoviesuggestion";
import { BG_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMAGE} alt="bg-logo" />
      </div>
      <GptSearchBar />
      <GtpMoviesuggestion />
    </div>
  );
};

export default GptSearch;
