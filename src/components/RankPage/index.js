import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard";
import { MovieListGrid } from "./styles";

export const RankPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const movies = props.location.state;

  useEffect(() => {
    if (movies) {
      fetch(
        `https://api.themoviedb.org/3/list/${movies.listId}?api_key=edbad9978614211059d746468c89b145&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          const { items } = data;
          setMoviesList([...items]);
          setLoading(false);
        });
    }
  }, [setLoading, movies, setMoviesList]);

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {!loading && movies && (
        <div>
          <h1>How will you rank the {movies.title}?</h1>
          <div>
            <MovieListGrid>
              {moviesList.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </MovieListGrid>
          </div>
        </div>
      )}
    </>
  );
};
