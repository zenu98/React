import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Puzzle from "./pages/Puzzle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/puzzle" element={<Puzzle />} />
    </Routes>
  );
}

export default App;
