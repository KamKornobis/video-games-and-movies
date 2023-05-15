import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { useEffect, useState, useContext } from "react";
import { GamesList } from "../games-components/games-list";
import { getData } from "../../api/getData";
import { SearchBox } from "../search-box/search-box";
import { GameItem } from "../games-components/game-item";
import "./games.site.scss";
import { GamesContext } from "../../contexts/gamesContext";

export const GamesSite = () => {
  const [games, setGames] = useContext(GamesContext);
  const [searchField, setSearchField] = useState("");
  const [filteredGamesList, setFilteredGamesList] = useState([]);
  const [recommendedList, setRecommendedist] = useState([]);
  const [chosenGame, setChosenGame] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": ""
      },
    };
    const games = await getData(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    );
    setGames(games);
    console.log(games);
  };

  useEffect(() => {
    const newFilteredGamesList = games.filter((game) => {
      return game.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredGamesList(newFilteredGamesList);
  }, [games, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const recommendedGames = games.filter((game) => {
      return game.genre.toLocaleLowerCase().includes(chosenGame);
    });
    setRecommendedist(recommendedGames);
  }, [games, chosenGame]);

  const onClickChange = (event) => {
    const chosedGenre = event.target.value;
    setChosenGame(chosedGenre);
  };

  return (
    <div className="games-page">
      {!chosenGame && (
        <div>
          <Link className="home-link-container" to="/">
            <Button buttonType="home-button" name={"Take me to home site"} />
          </Link>{" "}
          <h1>
            Click the game you liked, and we will recommend You what would You
            like to play next
          </h1>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="search games"
            className="search-box"
          />
          <GamesList
            onClick={() => onClickChange()}
            games={filteredGamesList}
          />
        </div>
      )}
      {chosenGame && (
        <div>
          <h1>If you liked</h1>
          {console.log(chosenGame)}
          <GameItem title={chosenGame.title} thumbnail={chosenGame.thumbnail} />
          <h1>You Can also try</h1>
          <GamesList gamesList={recommendedList} />
        </div>
      )}
    </div>
  );
};
