import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Puzzle from "./pages/Puzzle";
import Select from "./pages/Select";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select" element={<Select />} />
      <Route path="/puzzle" element={<Puzzle />} />
    </Routes>
  );
}

export default App;
