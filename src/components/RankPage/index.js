import React, { useState } from "react";
import {
  RankPageWrapper,
  RankPageGrid,
  MoviePosterGrid,
  RankedListItem,
  RankedListWrapper,
} from "./styles";
import { MoviePoster } from "../MoviePoster";

export const RankPage = (props) => {
  const { moviesList } = props.location.state;
  const [rankedList, setRankedList] = useState([]);

  const handleClick = (e, movie) => {
    const ranked = [];
    ranked.push(movie.title);
    setRankedList((prevState) => [...prevState, ...ranked]);
    movie.userRanking = rankedList.length + 1;
    movie.ranked = true;
    console.log(movie);
  };

  return (
    <RankPageWrapper>
      <h1>It's time to start ranking</h1>
      <RankPageGrid>
        <MoviePosterGrid>
          {moviesList.map((movie) => {
            return (
              <div
                onClick={(e) => {
                  handleClick(e, movie);
                }}
              >
                <MoviePoster
                  movie={movie}
                  ranked={movie.ranked}
                  ranking={movie.userRanking}
                />
              </div>
            );
          })}
        </MoviePosterGrid>
        <RankedListWrapper>
          <h3>Your Rankings</h3>
          {rankedList.map((item, i) => (
            <RankedListItem>{`${i + 1}. ${item}`}</RankedListItem>
          ))}
        </RankedListWrapper>
      </RankPageGrid>
    </RankPageWrapper>
  );
};
