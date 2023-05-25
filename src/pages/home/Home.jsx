import React from "react";
import styles from "./Home.module.css";
import Recipe from "../recipeApp/Recipe";
import { Link } from "react-router-dom";

function Home() {
 
  return (
    
    <>
      <div className={styles.homeWrapper}>
      
        {/* <Recipe /> */}
        <Link to={"/recipe"}>
          <button>Recipe</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
