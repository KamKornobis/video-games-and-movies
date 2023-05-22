import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { useEffect, useState, useContext, useRef } from "react";
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
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [chosenGame, setChosenGame] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "b320860d0fmsh62304f3bccb359bp107198jsn9f636ca1706e",
      },
    };
    const games = await getData(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    );
    setGames(games);
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
      return (
        game.genre.includes(chosenGame.genre) &&
        !game.title.includes(chosenGame.title)
      );
    });
    setRecommendedGames(recommendedGames);
    console.log(recommendedGames);
  }, [games, chosenGame]);

  return (
    <div className="games-page">
      {games.length === 0 && (
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
          <span>Oops, Sorry, We can't load the list now. Try again Later</span>
        </div>
      )}
      {chosenGame.length === 0 && games.length !== 0 && (
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
          {/* <GamesList onClick={() => onClickHandler()} games={filteredGamesList} /> */}
          <div className="games-list-container">
            {games.map((game) => (
              <GameItem
                key={game.id}
                title={game.title}
                thumbnail={game.thumbnail}
                onClick={() => setChosenGame(game)}
              />
            ))}
          </div>
        </div>
      )}
      {chosenGame && recommendedGames.length !== 0 && (
        <div>
          <Link to="/">
            <Button buttonType="home-button" name={"Take me to home site"} />
          </Link>
          <h1>If you liked</h1>
          <div className="chosen-game-container">
            <GameItem
              title={chosenGame.title}
              thumbnail={chosenGame.thumbnail}
            />
          </div>
          <h1>You Can also try</h1>
          <div className="recommended-games-container">
          <GamesList games={recommendedGames} />
          <div className="toggle-list-button-container">
            <Button
              buttonType={"toggle-list-button"}
              name={"Show me the List again"}
              onClick={() => setChosenGame([])}
            />
          </div>
          </div>
        </div>
      )}
      {chosenGame.length !== 0 && recommendedGames.length === 0 && (
        <div>
          <Link to="/">
            <Button buttonType="home-button" name={"Take me to home site"} />
          </Link>
          <h1>If you liked</h1>
          <div className="chosen-game-container">
            <GameItem
              title={chosenGame.title}
              thumbnail={chosenGame.thumbnail}
            />
          </div>
          <h1>
            Sorry, there are no games we can recommend You now. We
            consistently updating our library, so You can try later.
          </h1>
          <div className="toggle-list-button-container">
            <Button
              buttonType={"toggle-list-button"}
              name={"Show me the List again"}
              onClick={() => setChosenGame([])}
            />
          </div>
        </div>
      )}
    </div>
  );
};
