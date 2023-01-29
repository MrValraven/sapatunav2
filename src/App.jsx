import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Players from "./pages/Players/Players";
import Gamemodes from "./pages/Gamemodes/Gamemodes";

function App() {
  const [jogadores, setJogadores] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("jogadores")) {
      return;
    } else if (localStorage.getItem("jogadores").length === 0) {
      return;
    }
    setJogadores(JSON.parse(localStorage.getItem("jogadores")));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/gamemodes" element={<Gamemodes />} />
      </Routes>
    </div>
  );
}

export default App;
