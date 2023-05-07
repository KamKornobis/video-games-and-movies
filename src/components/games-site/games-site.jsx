import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { useEffect, useState } from "react";
import { GamesList } from "../games-components/games-list";
import { GameItem } from "../games-components/games-item";
import { getGames } from "../../api/getGames";
import { SearchBox } from "../search-box/search-box";

export const GamesSite = () => {
  const [gamesList, setGameList] = useState([]);
  const [searchField, setSearchField] = useState("")
  const [filteredGamesList, setFilteredGamesList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const games = await getGames();
    setGameList(games);
  
  };

  useEffect(() => {
    const newFilteredGamesList = gamesList.filter((game) => {
      return game.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredGamesList(newFilteredGamesList);
  }, [gamesList, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <Link to="/">
        <Button name={"Take me to home site"} />
      </Link>
      <h1>
        Click the game you liked, and we will recommend You what would You like
        to play next
      </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search games"
        className="search-box"
      />
      <GamesList gamesList={filteredGamesList} />
    </div>
  );
};
