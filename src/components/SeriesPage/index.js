import React from "react";
import series from "../../constants/series";

export const SeriesPage = () => {
  return (
    <div>
      <h1 className="title">Pick your series</h1>
      <div>
        {series.map((movie) => (
          <div>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
