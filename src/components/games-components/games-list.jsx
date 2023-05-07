import React from "react";
import "./games-list.scss";
import { GameItem } from "./games-item";

export const GamesList = ({ gamesList }) => {
  return (
    <div className="list">
      {gamesList.map((game) => (
        <GameItem key={game.id} title={game.title} thumbnail={game.thumbnail} />
      ))}
    </div>
  );
};
