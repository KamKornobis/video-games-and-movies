import React from "react";
import "./games-list.scss";
import { GameItem } from "./game-item";

export const GamesList = ({ games, onClick }) => {
  return (
    <div className="games-list-container">
      {games.map((game) => (
        <GameItem
          key={game.id}
          title={game.title}
          thumbnail={game.thumbnail}
          genre={game.genre}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
