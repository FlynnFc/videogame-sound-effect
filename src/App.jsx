import "./App.css";
import { Difficulty } from "./components/Dificulty";
import { Home } from "./components/Home";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Easy } from "./components/Easy";
import { Nav } from "./components/header/Nav";
import { Hard } from "./components/Hard";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="play/*" element={<Difficulty></Difficulty>} />
        <Route path="play/easy" element={<Easy></Easy>} />
        <Route path="play/hard" element={<Hard></Hard>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
