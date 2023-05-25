import React from "react";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipeApp/Recipe";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./pages/recipeApp/RecipeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/recipe"} element={<Recipe />} />
        <Route path={"/getAllRecipes"} element={<getAllRecipes />} />
        <Route path={"/recipe/:id"} element={<RecipeDetail />} />
      </Routes>
    </>
  );
}

export default App;
