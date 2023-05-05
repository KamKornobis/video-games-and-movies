import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { useEffect, useState } from "react";
import { GamesList } from "../games-components/games-list";
import { GameItem } from "../games-components/games-item";
import { getGames } from "../../api/getGames";
import { SearchBox } from "../search-box/search-box";

export const GamesSite = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const games = await getGames();
    setData(games);
  
  };
  console.log(data)

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
        // onChangeHandler={onSearchChange}
        placeholder="search games"
        className="search-box"
      />
      <GamesList>
      {data && 
      data.map((game) => (
        <GameItem 
        key={game.id}
        title={game.title}
        thumbnail={game.thumbnail}/>
      ))
      }
      </GamesList>
    </div>
  );
};
