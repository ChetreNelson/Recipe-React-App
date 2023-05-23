import axios from 'axios'


export  function getAllRecipie() {
  return new Promise((resolve,reject)=>{
        axios({
            method:`get`,
            url:``

        })
  } )
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
