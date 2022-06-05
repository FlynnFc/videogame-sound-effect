import React, { useState, useEffect } from "react";
import { Audio } from "./audio/Audio";
import { CorrectEasy } from "./ui/modals/CorrectEasy";
import mario from "../soundEffects/mario.mp3";
import minecraft from "../soundEffects/minecraft.mp3";
import csgo from "../soundEffects/csgo.mp3";
import wow from "../soundEffects/wow.mp3";
import lol from "../soundEffects/lol.mp3";
import zelda from "../soundEffects/zelda.mp3";

export const Easy = () => {
  const number = Math.floor(Math.random() * 6 + 0);

  const [currentGame, setCurrentGame] = useState("test");
  const [currentSource, setCurrentSource] = useState("sourceTest");

  useEffect(() => {
    const soundEffects = [
      { Game: "mario", source: mario },
      { Game: "csgo", source: csgo },
      { Game: "zelda", source: zelda },
      { Game: "minecraft", source: minecraft },
      { Game: "world of warcraft", source: wow },
      { Game: "league of legends", source: lol },
    ];

    setCurrentSource(() => soundEffects[number].source);
    setCurrentGame(() => soundEffects[number].Game);
  }, [number]);

  // console.log(currentSource, currentGame);

  const [guessHandler, setGuessHandler] = useState(false);

  const answerSubmitHandler = () => {
    setGuessHandler(true);
  };

  return (
    <div
      className="flex flex-col text-center justify-center align-middle"
      style={{ height: "94vh" }}
    >
      <div className="flex justify-center align-middle pb-5">
        <Audio currentSource={currentSource}></Audio>
      </div>
      <span>{currentGame}</span>
      <div className="flex justify-center align-middle flex-col md:flex-row mx-4">
        <input
          type="text"
          placeholder="Your guess"
          className="input input-bordered w-full max-w-2xl md:text-5xl text-2xl h-full md:rounded-r-none text-center shadow-x p-4"
        />
        <button
          onClick={answerSubmitHandler}
          type="button"
          className="btn btn-info md:h-full mt-2 md:mt-0 md:rounded-l-none shadow-xl md:text-2xl"
        >
          Guess
        </button>
      </div>
      {guessHandler && <CorrectEasy></CorrectEasy>}
    </div>
  );
};
