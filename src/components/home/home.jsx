import { Button } from "../button/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { getGames } from "../../api/getGames";

export const Home = () => {

  return (
    <div className="home-container">
      <h1>What would You like to check today?</h1>
      <Link to="/games">
        <Button name={"Games"} />
      </Link>
      <Link to="/movies">
        <Button name={"Movies"} />
      </Link>
    </div>
  );
};
