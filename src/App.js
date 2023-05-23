import React from "react";
import Home from "./pages/home/Home";
import Recipe from "./pages/home/Recipe";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Recipe />} path="/recipe" />
      </Routes>
    </>
  );
}

export default App;
