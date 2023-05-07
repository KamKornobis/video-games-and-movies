import React from "react";
import './movies-item.scss';

export const MoviesItem = ({ title, image, onClick }) => {
  return (
    <div className="movie-container" onClick={onClick}>
      <h1 className="movie-title">{title}</h1>
      <img className="movie-image" src={image} alt={`${title}`}></img>
    </div>
  );
};
