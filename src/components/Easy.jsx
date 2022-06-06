import React, { useState, useEffect, useRef } from "react";
import { IncorrectEasy } from "./ui/modals/IncorrectEasy";
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
  const answer = useRef();

  const [guessHandler, setGuessHandler] = useState("");
  const [currentGame, setCurrentGame] = useState("test");
  const [currentSource, setCurrentSource] = useState("sourceTest");
  const [skipCount, setSkipCount] = useState(3);
  const [skipDisabled, setSkipDisabled] = useState("");
  const [currentScore, setCurrentScore] = useState(0);

  const skipHandler = (skips) => {
    if (skips > 0) {
      setSkipCount((skips) => --skips);
      setGuessHandler(() => "noAnswer");
      answer.current.value = "";
    } else {
      setSkipDisabled(() => "disabled");
    }
  };

  const handleContinue = () => {
    setGuessHandler(() => "noAnswer");
    setCurrentScore((currentScore) => ++currentScore);
    answer.current.value = "";
  };

  useEffect(() => {
    const soundEffects = [
      { Game: ["mario"], source: mario },
      {
        Game: ["counter-strike", "csgo", "cs", "couter strike", "cs:go"],
        source: csgo,
      },
      { Game: ["zelda"], source: zelda },
      { Game: ["minecraft"], source: minecraft },
      { Game: ["world of warcraft", "wow"], source: wow },
      { Game: ["league of legends", "league", "lol"], source: lol },
    ];

    setCurrentSource(() => soundEffects[number].source);
    setCurrentGame(() => soundEffects[number].Game);
  }, [number]);

  console.log(currentGame);

  const answerSubmitHandler = () => {
    const userAnswer = answer.current.value.toLowerCase();
    if (currentGame.indexOf(userAnswer) > -1) {
      setGuessHandler("correct");
    } else {
      setGuessHandler("incorrect");
    }
  };

  return (
    <div
      className="flex flex-col text-center justify-center align-middle"
      style={{ height: "94vh" }}
    >
      <h4 className="text-2xl font-medium py-10">
        Current score is{" "}
        <span className="text-2xl font-bold">{currentScore}</span>
      </h4>
      <div className="flex justify-center align-middle pb-5">
        <Audio currentSource={currentSource}></Audio>
      </div>
      <div className="flex justify-center items-center align-stre flex-col md:space-x-0 px-10 py-5">
        <input
          ref={answer}
          type="text"
          placeholder="Your guess"
          className="input input-bordered w-full max-w-4xl text-center text-4xl h-full shadow-x p-6 focus:outline-1"
        />
        <button
          onClick={answerSubmitHandler}
          type="button"
          className="btn btn-info l mt-2 md:max-w-4xl shadow-xl text-xl w-full"
        >
          Guess
        </button>
      </div>
      {guessHandler === "correct" && (
        <CorrectEasy continueHandler={handleContinue}></CorrectEasy>
      )}
      {guessHandler === "incorrect" && (
        <IncorrectEasy
          disableHandler={skipDisabled}
          guessHandler={setGuessHandler}
          skipsLeft={skipCount}
          skipHandler={skipHandler}
        ></IncorrectEasy>
      )}
    </div>
  );
};
