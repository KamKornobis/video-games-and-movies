import { Button } from "../button/button";
import { Link } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="header">What would You like to check today?</h1>
      <div className="games-link-container">
      <Link to="/games">
        <Button buttonType="games-button" name={"Games"} />
      </Link>
      </div>
      <div className="movies-link-container">
      <Link to="/movies">
        <Button buttonType="movies-button" name={"Movies"} />
      </Link>
      </div>
    </div>
  );
};
