import React from "react";
import "./movies-list.scss";
import { MoviesItem } from "./movies-item";

export const MoviesList = ({ movies, onClick }) => {
  return (
    <div className="movies-list-container" onClick={onClick}>
      {movies.map((movie) => (
        <MoviesItem
          key={movie.id}
          title={movie.title}
          image={movie.image}
          director={movie.director}
          year={movie.year}
          rating={movie.rating}
          trailer={movie.trailer}
        />
      ))}
    </div>
  );
};
