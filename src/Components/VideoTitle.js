import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-serif text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg text-white text-justify w-1/4">{overview}</p>
      <div className=" flex my-4 md:m-0">
        <button className="bg-white text-black p-4 py-1 md:py-4 px-3 md:px-12 text-2xl font-semibold rounded-lg hover:bg-opacity-70">
          {" "}
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-white text-black font-semibold p-4 px-12 text-xl rounded-lg">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
