import React, { useState } from "react";
import { CorrectEasy } from "./ui/modals/CorrectEasy";

export const Easy = () => {
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
        <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>

      <div className="flex justify-center align-middle flex-col md:flex-row mx-4">
        <input
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
      {guessHandler && <CorrectEasy></CorrectEasy>}
    </div>
  );
};
