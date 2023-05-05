import React from "react";

export const MoviesItem = ({ title, image, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>{title}</div>
      <img src={image} alt={`${title}`}></img>
    </div>
  );
};
