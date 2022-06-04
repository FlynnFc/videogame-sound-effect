import React from "react";
import { NavLink } from "react-router-dom";

export const Home = (props) => {
  return (
    <div className="flex justify-center content-center h-screen items-center">
      <NavLink to="play">
        <button type="button" className="btn btn-lg">
          Guees the video game
        </button>
      </NavLink>
    </div>
  );
};
