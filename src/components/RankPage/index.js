import React, { useState } from "react";
import {
  RankPageWrapper,
  RankPageGrid,
  MoviePoster,
  MoviePosterGrid,
} from "./styles";

export const RankPage = (props) => {
  const { moviesList } = props.location.state;
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";
  const [rankedList, setRankedList] = useState([]);

  const handleClick = (e, movie) => {
    const ranked = [];
    ranked.push(movie.title);
    setRankedList((prevState) => [...prevState, ...ranked]);
  };

  return (
    <RankPageWrapper>
      <h1>It's time to start ranking</h1>
      <RankPageGrid>
        <MoviePosterGrid>
          {moviesList.map((movie) => {
            return (
              <MoviePoster
                onClick={(e) => {
                  handleClick(e, movie);
                }}
                src={`${baseImgUrl}${movie.poster_path}`}
              />
            );
          })}
        </MoviePosterGrid>
        <div>
          <h3>Your Rankings</h3>
          {rankedList.map((item, i) => (
            <h5>{`${i + 1}. ${item}`}</h5>
          ))}
        </div>
      </RankPageGrid>
    </RankPageWrapper>
  );
};
