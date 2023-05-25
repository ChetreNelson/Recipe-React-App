
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'

function Recipecard(props) {


  return (
    <div className={styles.recipeCardWrapper}>
      <Link to={`/recipe/${props.recipe.idMeal}`}>
        <img src={props.recipe.strMealThumb} alt="food " className={styles.cardImage}/>
      </Link>
        
          <div className={styles.contentWrapper}>
            <span className={styles.mealTitle}>{props?.recipe?.strMeal}</span>
            <span className={styles.mealSubtitle}>Time: <b>15m</b></span>  
          </div>    
    </div>
  )
}

export default Recipecard