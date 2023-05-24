import axios from 'axios'

export function getAllRecipesByCategory(category){
  return new Promise((resolve, reject)=>{
      axios({
          method: 'get',
          url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      }).then((res)=>{
          resolve(res?.data?.meals)

      })
  })
}
export  function getAllRecipieCategories() {
  return new Promise((resolve,reject)=>{
        axios({
            method:`get`,
            url:`https://www.themealdb.com/api/json/v1/1/categories.php`

        }).then((resp)=>{
           
            resolve(resp.data.categories)
        })
  } )
}



export  function getMealsDetails(mealId) {
  return new Promise((resolve,reject)=>{
    axios({
        method:`get`,
        url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`

    }).then((res)=>{
       
        resolve(res?.data?.meals?.[0])
    })
} )
}

