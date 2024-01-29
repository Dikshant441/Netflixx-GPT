import React from "react";
import { CDN_POSTER_URL } from "../utils/constant";

const MovieCart = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Poster" src={CDN_POSTER_URL + poster_path} />
    </div>
  );
};

export default MovieCart;
