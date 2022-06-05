import React from "react";

export const ScoreKeeper = (props) => {
  return (
    <div>
      <p>Top score **</p>
      <p>Current score {props.currentScore}</p>
    </div>
  );
};
