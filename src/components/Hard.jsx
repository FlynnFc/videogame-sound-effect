import React, { useState, useRef, useEffect } from "react";
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
import { IncorrectHard } from "./ui/modals/IncorrectHard";

export const Hard = () => {
  const answer = useRef();

  const [guessHandler, setGuessHandler] = useState("");
  const [currentGame, setCurrentGame] = useState("test");
  const [currentSource, setCurrentSource] = useState("sourceTest");
  const [currentScore, setCurrentScore] = useState(0);

  const handleContinue = () => {
    setGuessHandler(() => "noAnswer");
    setCurrentScore((currentScore) => ++currentScore);
    if (localStorage.getItem("topScoreHard") <= currentScore) {
      localStorage.setItem("topScoreHard", JSON.stringify(currentScore + 1));
    }
    answer.current.value = "";
  };

  useEffect(() => {
    const number = Math.floor(Math.random() * 30 + 0);

    const soundEffects = [
      { Game: ["Mario"], source: mario },
      {
        Game: ["Counter-Strike: Global Offensive"],
        source: csgo,
      },
      { Game: ["Zelda"], source: zelda },
      { Game: ["Minecraft"], source: minecraft },
      { Game: ["World Of Warcraft"], source: wow },
      { Game: ["League Of Legends"], source: lol },
      { Game: ["Pokemon"], source: pokemon },
      { Game: ["Call Of Duty"], source: cod },
      { Game: ["Halo"], source: halo },
      {
        Game: ["Grand Theft Auto"],
        source: gta,
      },
      { Game: ["Overwatch"], source: overwatch },
      { Game: ["Skyrim"], source: skyrim },
      {
        Game: ["The witcher 3"],
        source: witcher,
      },
      { Game: ["Age Of Empires 3"], source: ageOfEmpires },
      { Game: ["Assassins Creed"], source: assassinsCreed },
      {
        Game: ["Dark Souls", "Dark Souls 2", "Dark Souls 3"],
        source: darksouls,
      },
      { Game: ["Fallout"], source: fallout },
      { Game: ["Far Cry"], source: farCry },
      {
        Game: ["Final Fantasy"],
        source: finalfantasy,
      },
      { Game: ["Fortnite"], source: fortnite },
      { Game: ["metal gear solid"], source: metalGear },
      { Game: ["mortal kombat"], source: mortalKombat },
      { Game: ["portal 2"], source: portal },
      { Game: ["Quake"], source: quake },
      { Game: ["Rocket League"], source: rocketleague },
      { Game: ["Sims 4"], source: sims },
      { Game: ["Sonic The Hedgehog"], source: sonic },
      { Game: ["Spyro"], source: spyro },
      { Game: ["starcraft"], source: starcraft },
      { Game: ["SUPERHOT"], source: superhot },
    ];
    setCurrentSource(() => soundEffects[number].source);
    setCurrentGame(() => soundEffects[number].Game);
  }, [guessHandler]);

  const answerSubmitHandler = () => {
    const userAnswer = answer.current.value;
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
      <div className="flex flex-row text-center justify-center align-middle items-center">
        <span className="text-xl bg-neutral p-2 rounded m-1 text-white max-w-xs">
          Current score is{" "}
          <span className="text-xl font-bold">{currentScore}</span>
        </span>
        <span className="text-xl bg-warning p-2 rounded m-4 text-white max-w-xs">
          Top score <b>{localStorage.getItem("topScoreHard")}</b>
        </span>
      </div>
      <div className="flex justify-center align-middle pb-5">
        <Audio currentScore={currentScore} currentSource={currentSource} />
      </div>

      <div className="flex justify-center align-middle flex-col md:flex-row mx-4">
        <input
          ref={answer}
          type="text"
          placeholder="Your guess"
          className="input input-bordered w-full max-w-2xl md:text-5xl text-2xl h-full md:rounded-r-none text-center shadow-x p-4"
        />
        <button
          onClick={answerSubmitHandler}
          type="button"
          className="btn btn-warning md:h-full mt-2 md:mt-0 md:rounded-l-none shadow-xl md:text-2xl"
        >
          Guess
        </button>
      </div>
      {guessHandler === "correct" && (
        <CorrectEasy continueHandler={handleContinue}></CorrectEasy>
      )}
      {guessHandler === "incorrect" && <IncorrectHard />}
    </div>
  );
};
