import React from "react";
import Filter from "./Filter";
import "./style.css";

const MovieList = ({ movies, search, rate }) => {
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) &&
            movie.rating >= rate
        )
        .map((movie, index) => {
          return <Filter movie={movie} index={index} />;
        })}
    </div>
  );
};
export default MovieList;
