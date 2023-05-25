import React, { useEffect } from "react";
import { getMealsDetails } from "../../apis/Recipie";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styles from './RecipeDetail.module.css'
import { CloseIcon, LeftArrow } from "../../utils/icon";
import { Link } from "react-router-dom";

export default function RecipeDetail() {
  const [recipeDetail, setRecipeDetail] = React.useState("");
  const { id } = useParams(); //brings query parameter from url; from router dome; hook
  const Navigate = useNavigate();

  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = () => {
    getMealsDetails(id).then((res) => {
      setRecipeDetail(res);
    });
  };
  const goBack = () => {
    Navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className="icon-wrapper" onClick={goBack}>
        {LeftArrow()}
      </div>

      {recipeDetail?.strYoutube ? (
        <ReactPlayer url={recipeDetail?.strYoutube} width="100%" />
      ) : (
        <img src={recipeDetail?.strMealTHumb} alt="" />
      )}
      <h1>{recipeDetail?.strMeal}</h1>
      <br />
      {recipeDetail?.strInstructions}
      <div>
        <div className="icon-wrapper" onClick={goBack}>
          {CloseIcon()}
        </div>
        <div className={styles.ingredient}>
            <h4>Ingredient</h4>
            {Array.from({ length: 20 }).map((item, index) => (
            <>
                {recipeDetail?.[`strIngredient${index + 1}`] ? (
                <span>{recipeDetail?.[`strIngredient${index + 1}`]}</span>
                ) : (
                ""
                )}
            </>
            ))}
        </div>
      </div>
    </div>
  );
}
