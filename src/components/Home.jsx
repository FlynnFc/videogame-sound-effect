import React from "react";
import { NavLink } from "react-router-dom";

export const Home = (props) => {
  return (
    <div
      className="flex justify-center items-center align-middle flex-col md:flex-row mx-4 md:space-x-4 md:space-y-0 space-y-4"
      style={{ height: "94vh" }}
    >
      <NavLink to="play">
        <button type="button" className="btn btn-lg border-t-green-400 w-full">
          Guess the video game
        </button>
      </NavLink>
      <NavLink to="">
        <button
          disabled
          type="button"
          className="btn btn-lg border-b-yellow-400 w-full"
        >
          Guess the Movie clip
        </button>
      </NavLink>
    </div>
  );
};
