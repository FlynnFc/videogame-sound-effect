import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="play" element={<Difficulty></Difficulty>} />
  //   </Routes>
  // </BrowserRouter>
  <App></App>
);
