import React from "react";
import GptSearchBar from "./GptSearchBar";
import GtpMoviesuggestion from "./GtpMoviesuggestion";
import { BG_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_IMAGE} alt="bg-logo" />
      </div>
      <div className="md:p-0">
        <GptSearchBar />
        <GtpMoviesuggestion />
      </div>
    </>
  );
};

export default GptSearch;
