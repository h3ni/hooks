import React from "react";

const MovieCard = ({ movie, index }) => {
  return (
    <div className="movie" key={index}>
      <img src={movie.posterUrl} alt="poster movie" />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
