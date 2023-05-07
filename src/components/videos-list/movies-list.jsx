import React from "react";
import "./movies-list.scss";
import { MoviesItem } from "./movies-item";

export const MoviesList = ({ moviesList }) => {
  return (
    <div className="list">
      {moviesList.map((movie) => (
        <MoviesItem key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
};
