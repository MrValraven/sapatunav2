import { createContext, useState } from "react";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
