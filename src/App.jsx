import "./App.css";
import { useState } from "react";
import { Difficulty } from "./components/dificulty/Dificulty";
import { Home } from "./components/Home";
import { Nav } from "./components/header/Nav";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(true);

  const gameStatusHandler = () => {
    setIsGameLive(true);
  };

  return (
    <div>
      <Nav></Nav>
      {!isGameLive && <Home gameStatusHandler={gameStatusHandler} />}
      {isGameLive && <Difficulty></Difficulty>}
    </div>
  );
};

export default App;
