import React from "react";
import "./movies-list.scss";
import { MoviesItem } from "./movies-item";

export const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list-container">
      {movies.map((movie) => (
        <MoviesItem key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
};
