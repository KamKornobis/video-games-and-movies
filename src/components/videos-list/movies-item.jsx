import React from "react";
import "./movies-item.scss";
import { Button } from "../button/button";

export const MoviesItem = ({ title, image, onClick, director, rating, year, trailer }) => {
  return (
    <div className="movie-container" onClick={onClick}>
      <h1 className="movie-title">{title}</h1>
      <img className="movie-image" src={image} alt={`${title}`}></img>
      <div className="movies-footer">
        <span className="director">DIRECTOR: {director}</span>
        <span className="rating">IMDB RATING: {rating}</span>
        <span className="year">YEAR: {year}</span>
        <a target="_blank" href={trailer}>
        <Button buttonType="link-button" name={"WATCH TRAILER"} />
        </a>
      </div>
    </div>
  );
};
