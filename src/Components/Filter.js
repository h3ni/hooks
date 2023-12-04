import React from "react";
import MovieCard from "./MovieCard";

const Filter = ({ movie, index }) => {
  console.log(movie);
  return <MovieCard movie={movie} index={index} />;
};

export default Filter;
