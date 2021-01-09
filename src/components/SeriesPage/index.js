import React from "react";
import series from "../../constants/series";
import { SeriesWrapper, SeriesGrid } from "./styles";
import { Link } from "react-router-dom";

export const SeriesPage = () => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w185/";

  return (
    <SeriesWrapper>
      <h1 className="title">Pick your series</h1>
      <SeriesGrid>
        {series.map((movies) => (
          <Link to={{ pathname: `/movie-list/${movies.slug}`, state: movies }}>
            {movies.poster && <img src={`${baseImgUrl}${movies.poster}`} />}
            <h3>{movies.title}</h3>
          </Link>
        ))}
      </SeriesGrid>
    </SeriesWrapper>
  );
};
