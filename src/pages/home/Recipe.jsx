import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import RecipeCard from "../../components/cards/RecipeCard";
import { getAllRecipieCategories } from "../../apis/Recipie";
import { Link } from "react-router-dom";

function Recipe() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRecipesByCategory();
  }, []);

  const getRecipesByCategory = () => {
    getAllRecipieCategories().then((res) => {
      setCategories(res);
    });
  };

  return (
    <>
      {categories?.length > 0 &&
        categories?.map((category) => (
          <div key={category.idCategory}>{category?.strCategory}</div>
        ))}

      <div className={styles.homeWrapper}>
        <div className={styles.recipeCardWrapper}>
          {[0, 1, 2, 3, 4, 5].map(() => (
            <RecipeCard />
          ))}
        </div>
      </div>
      <div >
      <Link to={"/"}><button>Home</button></Link> 
      </div>
   
    </>
  );
}
export default Recipe;
