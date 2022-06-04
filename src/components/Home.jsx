import React from "react";

export const Home = (props) => {
  return (
    <div className="flex justify-center content-center h-screen items-center">
      <button
        onClick={() => {
          props.gameStatusHandler();
        }}
        className="btn btn-lg"
      >
        Guees the video game
      </button>
    </div>
  );
};
