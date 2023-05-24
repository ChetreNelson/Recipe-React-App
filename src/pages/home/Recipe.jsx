import React, { useEffect, useState } from "react";
// import styles from "./Home.module.css";
import RecipeCard from "../../components/cards/RecipeCard";
import { getAllRecipieCategories ,getAllRecipesByCategory } from "../../apis/Recipie";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

function Recipe() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState([]);

  const [meal, setMeals] = useState([]);
  

  useEffect(() => {
    getRecipesByCategory();
  }, []);

  const getRecipesByCategory = () => {
    getAllRecipieCategories().then((res) => {
      setCategories(res);
    });
  };

  const getMealByCategory =()=>{
    getAllRecipesByCategory().then((res) => {
      setMeals(res);
    });
  };

  return (
    <>
    <div className={styles.categoriesWrapper}>

        
      {categories?.length > 0 &&
        categories?.map((category) => (
          <div className={styles.categoryItem} key={category.idCategory}>
            {category?.strCategory}
          </div>
          
        ))}
        </div>

      <div className={styles.homeWrapper}>
        <div className={styles.recipeCardsWrapper}>
          
          {[0, 1, 2, 3, 4, 5,6,7,8,9].map((recipe) => (
            <RecipeCard />
          ))}
        </div>
       
      </div>
      <div className={styles.btnWrapper}>

      
        <Link to={"/"}>
          <button className={styles.btn}>Home</button>
        </Link>
        </div>
    </>
  );
}
export default Recipe;
