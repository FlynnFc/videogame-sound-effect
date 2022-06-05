import React from "react";
// import { CorrectEasy } from "./ui/modals/CorrectEasy";

export const Easy = () => {
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

      <div className="flex justify-center align-middle">
        <input
          type="text"
          placeholder="Your guess"
          className="input input-bordered w-full max-w-2xl text-5xl h-full rounded-r-none text-center shadow-x p-4"
        />
        <button
          type="button"
          className="btn btn-info h-full rounded-l-none shadow-xl text-2xl"
        >
          Guess
        </button>
      </div>
      {/* <CorrectEasy></CorrectEasy> */}
    </div>
  );
};
