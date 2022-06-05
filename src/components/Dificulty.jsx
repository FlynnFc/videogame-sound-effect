import React from "react";
import { useRef, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Easy } from "./Easy";

export const Difficulty = () => {
  const [gamemodePath, setGamemodePath] = useState("easy");

  const greenButtonRef = useRef();
  const redButtonRef = useRef();

  const modeHandler = (mode) => {
    setGamemodePath(mode);
  };

  const activeGreenButtonHandler = () => {
    if (greenButtonRef.current.classList.contains("activeGreen")) {
      return;
    }
    greenButtonRef.current.classList.toggle("activeGreen");
    modeHandler("easy");
    if (redButtonRef.current.classList.contains("activeRed")) {
      redButtonRef.current.classList.remove("activeRed");
    }
  };

  const activeRedButtonHandler = () => {
    redButtonRef.current.classList.toggle("activeRed");
    modeHandler("hard");
    if (greenButtonRef.current.classList.contains("activeGreen")) {
      greenButtonRef.current.classList.remove("activeGreen");
    }
  };

  return (
    <form
      className="flex flex-col justify-evenly items-center xl:space-x-12 text-neutral-content text-xl"
      style={{ height: "94vh" }}
    >
      <h1 className="md:text-5xl font-bold text-base-content text-5xl">
        Before you
        <NavLink to={gamemodePath}>
          <button
            id="submitButton"
            className="btn btn-outline btn-primary-content btn-lg text-4xl ml-2"
          >
            Begin
          </button>
        </NavLink>
      </h1>
      <div className=" xl:flex-row  flex-col items-strech space-y-2 lg:space-y-0 space-x-0 lg:space-x-10 text-xl flex">
        <div className="card w-96 bg-base-100 shadow-xl card-bordered	">
          <div className="card-body">
            <h2 className="card-title underline underline-offset-1 text-2xl">
              Easy mode
            </h2>
            <ul className="space-y-2 font-thin">
              <li>You get 3 guesses.</li>
              <li>The answer does not need to be the exact game</li>
            </ul>
            <div className="card-actions justify-end p-4">
              <button
                ref={greenButtonRef}
                type="button"
                onClick={activeGreenButtonHandler}
                className="btn btn-outline btn-success activeGreen"
              >
                Easy mode
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title underline underline-offset-1 text-2xl">
              Hard mode
            </h2>
            <ul className="space-y-2 font-thin">
              <li>You get 1 guess</li>
              <li>You're answer must be exact</li>
              <li>skipping reduces points</li>
            </ul>
            <div className="card-actions justify-end p-4">
              <button
                ref={redButtonRef}
                type="button"
                onClick={activeRedButtonHandler}
                className="btn btn-outline btn-error"
              >
                Hard mode
              </button>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="hard"></Route>
        <Route path="easy" element={<Easy></Easy>}></Route>
      </Routes>
    </form>
  );
};
