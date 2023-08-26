import { useContext } from "react";
import PlayerContext from "../context/PlayersProvider";

const usePlayers = () => {
  return useContext(PlayerContext);
};

export default usePlayers;
