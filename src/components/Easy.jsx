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
import pokemon from "../soundEffects/pokemon.mp3";
import cod from "../soundEffects/cod.mp3";
import halo from "../soundEffects/halo.mp3";
import gta from "../soundEffects/gta.mp3";
import overwatch from "../soundEffects/overwatch.mp3";
import skyrim from "../soundEffects/skyrim.mp3";
import witcher from "../soundEffects/witcher.mp3";
import ageOfEmpires from "../soundEffects/ageOfEmpires.mp3";
import assassinsCreed from "../soundEffects/assassinsCreed.mp3";
import darksouls from "../soundEffects/darksouls.mp3";
import fallout from "../soundEffects/fallout.mp3";
import farCry from "../soundEffects/farCry.mp3";
import finalfantasy from "../soundEffects/finalfantasy.mp3";
import fortnite from "../soundEffects/fortnite.mp3";
import metalGear from "../soundEffects/metalGear.mp3";
import mortalKombat from "../soundEffects/mortalKombat.mp3";
import portal from "../soundEffects/portal.mp3";
import quake from "../soundEffects/quake.mp3";
import rocketleague from "../soundEffects/rocketleague.mp3";
import sims from "../soundEffects/sims.mp3";
import sonic from "../soundEffects/sonic.mp3";
import spyro from "../soundEffects/spyro.mp3";
import starcraft from "../soundEffects/starcraft.mp3";
import superhot from "../soundEffects/superhot.mp3";

export const Easy = () => {
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
    if (localStorage.getItem("topScore") <= currentScore) {
      localStorage.setItem("topScore", JSON.stringify(currentScore + 1));
    }
    answer.current.value = "";
  };

  useEffect(() => {
    const number = Math.floor(Math.random() * 30 + 0);

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
      { Game: ["pokemon"], source: pokemon },
      { Game: ["cod", "call of duty"], source: cod },
      { Game: ["halo"], source: halo },
      {
        Game: [
          "gta",
          "grand theft auto",
          "gta5",
          "gta v",
          "grand theft auto v",
        ],
        source: gta,
      },
      { Game: ["overwatch", "overwatch 2"], source: overwatch },
      { Game: ["skyrim", "the elder scrolls"], source: skyrim },
      {
        Game: ["witcher", "the witcher", "witcher 3", "the witcher 3"],
        source: witcher,
      },
      { Game: ["age of empires", "aoe"], source: ageOfEmpires },
      { Game: ["assassins creed", "AC", "origins"], source: assassinsCreed },
      {
        Game: ["dark souls", "dark souls 2", "dark souls 3"],
        source: darksouls,
      },
      { Game: ["fallout"], source: fallout },
      { Game: ["far cry ", "far cry 6", "far cry 5"], source: farCry },
      {
        Game: ["final fantasy", "final fantasy victory"],
        source: finalfantasy,
      },
      { Game: ["fortnite"], source: fortnite },
      { Game: ["metal gear solid", "metal gear", "mg"], source: metalGear },
      { Game: ["mortal kombat", "mortal combat"], source: mortalKombat },
      { Game: ["portal", "portal 2"], source: portal },
      { Game: ["quake"], source: quake },
      { Game: ["rocket league", "rl"], source: rocketleague },
      { Game: ["sims", "the sims", "sims 4", "the sims 4"], source: sims },
      { Game: ["sonic", "sonic the hedgehog"], source: sonic },
      { Game: ["spyro"], source: spyro },
      { Game: ["starcraft", "starcraft 2"], source: starcraft },
      { Game: ["superhot", "super hot"], source: superhot },
    ];
    console.log(soundEffects.length);
    setCurrentSource(() => soundEffects[number].source);
    setCurrentGame(() => soundEffects[number].Game);
  }, []);

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
      className="flex flex-col text-center justify-center align-middle space-y-4 md:space-y-12 "
      style={{ height: "94vh" }}
    >
      <div className="flex flex-row text-center justify-center align-middle items-center">
        <span className="text-xl bg-neutral p-2 rounded m-1 text-white max-w-xs">
          Current score is{" "}
          <span className="text-xl font-bold">{currentScore}</span>
        </span>
        <span className="text-xl bg-info p-2 rounded m-4 text-white max-w-xs">
          Top score <b>{localStorage.getItem("topScore")}</b>
        </span>
      </div>
      <div className="flex justify-center align-middle">
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
