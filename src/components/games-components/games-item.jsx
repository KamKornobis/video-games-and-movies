import React from "react";
import './games-item.scss';

export const GameItem = ({ title, thumbnail, onClick }) => {
  return (
    <div onClick={onClick}>
      <h1 className="title">{title}</h1>
      <img src={thumbnail} alt={`${title}`}></img>
    </div>
  );
};
