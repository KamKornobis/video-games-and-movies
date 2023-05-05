import { createContext, useState } from "react";
import GAMES from "../response.json";

export const GamesContext = createContext({
  games: [],
});

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState(GAMES);
  const value = { games };
  return (
    <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
  );
};
