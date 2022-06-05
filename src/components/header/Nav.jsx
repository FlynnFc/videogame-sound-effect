import React, { useState } from "react";
import { useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Nav = () => {
  const theme = useRef();
  const [darkMode, setDarkMode] = useState(true);

  const themeHandler = () => {
    setDarkMode((darkMode) => !darkMode);
    console.log(theme.current);
  };
  return (
    <div
      ref={theme}
      className="text-right pt-2 pr-2 max-w z-10"
      style={{ height: "6vh" }}
    >
      <button onClick={themeHandler} className="btn">
        {!darkMode && <FaMoon className="text-xl" />}
        {darkMode && <FaSun className="text-xl" />}
      </button>
    </div>
  );
};
