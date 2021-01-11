import React from "react";
import { MoviePosterWrapper } from "./styles";

export const MoviePoster = ({ movie, ranked, ranking }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";
  return (
    <MoviePosterWrapper ranked={ranked}>
      {ranking && <div>{ranking}</div>}
      <img src={`${baseImgUrl}${movie.poster_path}`} />
    </MoviePosterWrapper>
  );
};
