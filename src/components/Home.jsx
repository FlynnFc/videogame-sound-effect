import React from "react";
import { NavLink } from "react-router-dom";

export const Home = (props) => {
  return (
    <div
      className="flex justify-center content-center items-center"
      style={{ height: "94vh" }}
    >
      <NavLink to="play">
        <button type="button" className="btn btn-lg">
          Guees the video game
        </button>
      </NavLink>
    </div>
  );
};
