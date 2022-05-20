import "./App.css";
import { useState } from "react";
import { Difficulty } from "./components/dificulty/Dificulty";

function App() {
  const [isGameLive, setIsGameLive] = useState(false);

  const gameStatusHandler = () => {
    setIsGameLive(true);
  };

  return (
    <>
      {!isGameLive && (
        <div className="flex justify-center content-center h-screen items-center">
          <button
            onClick={() => {
              gameStatusHandler();
            }}
            className="btn btn-lg"
          >
            Guees the video game
          </button>
        </div>
      )}
      {isGameLive && <Difficulty></Difficulty>}
    </>
  );
}

export default App;
