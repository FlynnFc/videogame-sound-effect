import React from "react";

export const Audio = (props) => {
  console.log("component rendered", props.currentSource);
  return (
    <div>
      {/* <button className="btn">play</button> */}
      <audio controls>
        <source type="audio/mpeg" src={props.currentSource} />
        <source type="audio/ogg" src="" />
      </audio>
    </div>
  );
};
