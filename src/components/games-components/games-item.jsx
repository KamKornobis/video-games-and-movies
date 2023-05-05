import React from "react";

export const GameItem = ({ title, thumbnail, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>{title}</div>
      <img src={thumbnail} alt={`${title}`}></img>
    </div>
  );
};
