import React, { useEffect, useState } from "react";
import { MoviePosterWrapper } from "./styles";

export const MoviePoster = ({ movie, handleClick }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";
  const [ranked, setRanked] = useState(false);
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    setRanking(movie.userRanking);
  }, [movie.userRanking, setRanking]);

  const handleRanking = (movie) => {
    handleClick(movie);
    if (ranked) {
      setRanked(false);
    } else {
      setRanked(true);
    }
  };

  return (
    <MoviePosterWrapper ranked={ranked} onClick={() => handleRanking(movie)}>
      {ranked && <div>{ranking}</div>}
      <img src={`${baseImgUrl}${movie.poster_path}`} />
    </MoviePosterWrapper>
  );
};
