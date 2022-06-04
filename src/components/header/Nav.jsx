import React from "react";
import { useRef } from "react";

export const Nav = () => {
  const theme = useRef();

  const themeHandler = () => {
    console.log(theme.current);
  };
  return (
    <div ref={theme}>
      <button
        onClick={themeHandler}
        className="btn btn-outline btn-success activeGreen"
      >
        Theme
      </button>
    </div>
  );
};
