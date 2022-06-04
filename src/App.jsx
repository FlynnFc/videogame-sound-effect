import "./App.css";
import { Difficulty } from "./components/dificulty/Dificulty";
import { Home } from "./components/Home";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="play/*" element={<Difficulty></Difficulty>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
