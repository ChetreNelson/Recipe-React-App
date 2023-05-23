import React from 'react'
import styles from './RecipeCard.module.css'

function RecipeCard() {
  return (
    <div className={styles.cardWrapper}>
         <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt=""  className={styles.cardImg}/>
         <span>Menu</span>
         

    </div>
  )
}

export default RecipeCard;
