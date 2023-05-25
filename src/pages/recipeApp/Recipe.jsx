import React, { useEffect, useState, useCallback } from "react";
// import styles from "./Home.module.css";
import RecipeCard from "../../components/cards/RecipeCard";
import {
  getAllRecipieCategories,
  getAllRecipies,
  getMealsBySearch,
} from "../../apis/Recipie";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Recipe.module.css";
import SearchFiled from "../../components/common/SearchField";
import { CloseIcon, LeftArrow } from "../../utils/icon";

function Recipe() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("Dessert");

  const [meal, setMeals] = useState([]);

  const getRecipesByCategory = () => {
    getAllRecipieCategories().then((res) => {
      setCategories(res);
    });
  };

  const getMealsByCategory = useCallback(() => {
    getAllRecipies(selectedCategory).then((res) => {
      setMeals(res);
    });
  }, [selectedCategory]);

  useEffect(() => {
    getRecipesByCategory();
    getMealsByCategory();
  }, [selectedCategory]);
  const filterByName = (name) => {
    getMealsBySearch(name).then((res) => {
      setMeals(res);
    });
  };
  const Navigate = useNavigate();
  const goBack = () => {
    Navigate("/");
  };

  return (
    <>
      <div className="icon-wrapper" onClick={goBack}>
        {LeftArrow()}
      </div>
      <SearchFiled
        onSearchInitiate={(searchItem) => {
          filterByName(searchItem);
        }}
      />
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <div key={category.idCategory}>
              {/* Using onClick functio so we can choose the item and see the detail about items */}
              <button
                className={styles.categoryItem}
                onClick={() => {
                  setSelectedcategory(category.strCategory);
                }}
              >
                {category?.strCategory}
              </button>
            </div>
          ))}
      </div>

      <div className={styles.homeWrapper}>
        <div className={styles.recipeCardsWrapper}>
          {meal?.map((recipe) => (
            <Link
              to={`/recipe/${recipe.idMeal}`}
              className={styles.recipeCardsWrapper}
              key={recipe.idMeal}
            >
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Recipe;
