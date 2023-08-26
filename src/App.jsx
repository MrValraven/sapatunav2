import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Players from "./pages/Players/Players";
import Gamemodes from "./pages/Gamemodes/Gamemodes";
import Questions from "./pages/Questions/Questions";
import usePlayers from "./hooks/usePlayers";

function App() {
  const { setPlayers } = usePlayers();
  useEffect(() => {
    try {
      const playersInLocalStorage = localStorage.getItem("players");
      console.log(playersInLocalStorage)
      if (!playersInLocalStorage) {
        throw new Error('Players item doesn\'t exist in localStorage');
      } else if (playersInLocalStorage.length === 0) {
        throw new Error('Players item is empty in localStorage');
      }
      setPlayers(JSON.parse(playersInLocalStorage));
    } catch (error) {
      console.error('Couldn\'t find players in localStorage', error.message);
      setPlayers([])
    }

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/gamemodes" element={<Gamemodes />} />
        <Route path="/:mode/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
