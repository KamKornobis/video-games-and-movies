import React from "react";
import "./games-item.scss";
import { Button } from "../button/button";

export const GameItem = ({ title, thumbnail, onClick, genre, developer, releaseDate, platform  }) => {
  return (
    <div className="game-container" onClick={onClick}>
      <h1 className="game-title">{title}</h1>
      <img src={thumbnail} alt={`${title}`}></img>
      <div className="games-footer">
      <span className="genre">GENRE: {genre}</span>
      <span className="developer">DEVELOPER: {developer}</span>
      <span className="releaseDate">RELEASE DATE: {releaseDate}</span>
      <span className="platform">PLATFORM: {platform}</span>
      <Button buttonType="link-button" name={"SHOW DETAILS"} />
      </div>
    </div>
  );
};
