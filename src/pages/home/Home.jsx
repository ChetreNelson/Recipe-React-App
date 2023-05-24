import React from "react";
import styles from "./Home.module.css";
import RecipeCard from "../../components/cards/RecipeCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.RecipeCardWrapper}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <RecipeCard />
          ))}
        </div>
        <div className={styles.btnWrapper}>
        <Link to={"/recipe"}>
          <button className={styles.btn}>Recipe</button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
