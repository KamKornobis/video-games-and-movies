import React from "react";
import './games-item.scss';

export const GameItem = ({ title, thumbnail, onClick }) => {
  return (
    <div className="game-container" onClick={onClick}>
      <h1 className="game-title">{title}</h1>
      <img src={thumbnail} alt={`${title}`}></img>
    </div>
  );
};
