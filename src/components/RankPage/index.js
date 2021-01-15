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
  const [moviesList, setMoviesList] = useState(props.location.state.moviesList);
  const [rankedList, setRankedList] = useState([]);

  const handleClick = (movie) => {
    if (movie.userRanking) {
      const newMoviesList = moviesList.map((listMovie) => {
        if (listMovie.userRanking > movie.userRanking) {
          const newRanking = listMovie.userRanking - 1;
          listMovie.userRanking = newRanking;
          return listMovie;
        } else {
          return listMovie;
        }
      });

      movie.userRanking = null;

      setMoviesList(newMoviesList);

      const newRankedArray = rankedList.filter(
        (rankedMovie) => rankedMovie !== movie.title
      );

      setRankedList(newRankedArray);
    } else {
      const ranked = [];
      ranked.push(movie.title);
      setRankedList((prevState) => [...prevState, ...ranked]);
      movie.userRanking = rankedList.length + 1;
    }
  };

  return (
    <RankPageWrapper>
      <h1>It's time to start ranking</h1>
      <RankPageGrid>
        <MoviePosterGrid>
          {moviesList.map((movie) => {
            return (
              <div>
                <MoviePoster
                  key={movie.id}
                  handleClick={handleClick}
                  movie={movie}
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
