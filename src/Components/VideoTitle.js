import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-serif text-white">{title}</h1>
      <p className="py-6 text-lg text-white text-justify w-1/4">{overview}</p>
      <div className=" flex">
        <button className="bg-white text-black p-4 px-12 text-2xl font-semibold rounded-lg hover:bg-opacity-70">
          {" "}
          ▶ Play
        </button>
        <button className="mx-2 bg-white text-black font-semibold p-4 px-12 text-xl rounded-lg">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
