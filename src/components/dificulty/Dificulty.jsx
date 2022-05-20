import React from "react";
import { useRef } from "react";

export const Difficulty = () => {
  const greenButtonRef = useRef();
  const redButtonRef = useRef();

  const activeGreenButtonHandler = () => {
    greenButtonRef.current.classList.toggle("activeGreen");

    if (redButtonRef.current.classList.contains("activeRed")) {
      redButtonRef.current.classList.remove("activeRed");
    }
  };

  const activeRedButtonHandler = () => {
    redButtonRef.current.classList.toggle("activeRed");

    if (greenButtonRef.current.classList.contains("activeGreen")) {
      greenButtonRef.current.classList.remove("activeGreen");
    }
  };

  return (
    <form className="flex flex-col justify-evenly h-screen items-center space-x-12 bg-neutral text-neutral-content ">
      <h1 className="text-5xl ">
        Before you{" "}
        <button className="btn btn-outline btn-lg text-4xl font-bold">
          Begin
        </button>
      </h1>
      <div className=" flex-row flex space-x-12">
        <div className="card w-96 bg-base-100 shadow-xl card-bordered	">
          <div className="card-body">
            <h2 className="card-title underline">Easy mode</h2>
            <ul className="space-y-2">
              <li>You get 3 guesses.</li>
              <li>
                The answer does not need to be the exact game eg "Halo" instead
                of "Halo 2"
              </li>
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
            <h2 className="card-title underline">Hard mode</h2>
            <ul className="space-y-2">
              <li>You get 2 guesses</li>
              <li>You'r answer must be exact</li>
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
    </form>
  );
};
