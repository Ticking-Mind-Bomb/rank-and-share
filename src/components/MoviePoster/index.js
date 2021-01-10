import React from "react";

export const MoviePoster = ({ movie }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";
  return (
    <div>
      <img src={`${baseImgUrl}${movie.poster_path}`} />
    </div>
  );
};