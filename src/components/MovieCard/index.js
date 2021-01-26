import React from "react";
import { CardWrapper, CardGrid, MovieInfo } from "./styles";
import { IoThumbsUpSharp, IoThumbsDownSharp } from "react-icons/io5";

export const MovieCard = ({ movie }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";

  return (
    <CardWrapper>
      <CardGrid>
        <div>
          <img src={`${baseImgUrl}${movie.poster_path}`} />
        </div>
        <MovieInfo>
          <h2>{movie.title}</h2>
          <div className="info-grid">
            <div>
              <h4>Release Date:</h4>
              <p>{movie.release_date}</p>
              <h4>Rating:</h4>
              <p>
                {`${movie.vote_average * 10}%`}{" "}
                {movie.vote_average < 6 ? (
                  <IoThumbsDownSharp />
                ) : (
                  <IoThumbsUpSharp />
                )}
              </p>
            </div>
            <div>
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        </MovieInfo>
      </CardGrid>
    </CardWrapper>
  );
};
