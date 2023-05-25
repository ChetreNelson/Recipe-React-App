import axios from "axios";

export function getAllRecipies(category) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    }).then((resp) => {
      resolve(resp?.data?.meals);
    });
  });
}
export function getAllRecipieCategories() {
  return new Promise((resolve, reject) => {
    axios({
      method: `get`,
      url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
    }).then((resp) => {
      resolve(resp?.data?.categories);
    });
  });
}

export function getMealsDetails(mealId) {
  return new Promise((resolve, reject) => {
    axios({
      method: `get`,
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    }).then((res) => {
      resolve(res?.data?.meals?.[0]);
    });
  });
}

export function getMealsBySearch(mealName) {
  return new Promise((resolve, reject) => {
    axios({
      method: `get`,
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
    }).then((res) => {
      resolve(res?.data?.meals);
    });
  });
}
