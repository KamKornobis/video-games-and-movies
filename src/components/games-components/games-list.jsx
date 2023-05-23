import React from "react";
import "./games-list.scss";
import { GameItem } from "./game-item";

export const GamesList = ({ games, chooseGame }) => {
  return (
    <div className="games-list-container">
      {games.map((game) => (
        <GameItem
          key={game.id}
          title={game.title}
          thumbnail={game.thumbnail}
          genre={game.genre}
          onClick={() => {
            chooseGame(game)
          }}
          developer={game.developer}
          releaseDate={game.release_date}
          platform={game.platform}
          game_url={game.game_url}
        />
      ))}
    </div>
  );
};
