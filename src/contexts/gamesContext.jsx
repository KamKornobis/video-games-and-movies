import { createContext, useState } from "react";

export const GamesContext = createContext({
  games: [],
});

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  return (
    <GamesContext.Provider value={[games, setGames]}>
      {children}
    </GamesContext.Provider>
  );
};
