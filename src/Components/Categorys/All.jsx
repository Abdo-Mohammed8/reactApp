import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meals from '../Meals'
import Loading from '../Loading';

export default function All() {
    let [arry,setArry] = useState([]);
    let [error,setError] = useState('');
   
    async function  getaAllMeals(){

        

      try{
          let {data} =await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
      
          setArry(data.meals)
          
      }
      catch(error){
        setError(error.message)
      }
     
      }
      useEffect(() => {
        getaAllMeals()
      },[] );
      
  return (
    <>
   {error==''? <>{arry.length?arry.map(ele=><Meals key={ele.idMeal} idMeal={ele.idMeal}  strMeal={ele.strMeal} strArea={ele.strArea} img={ele.strMealThumb}></Meals>):<Loading></Loading>}</>:<Loading error={error}></Loading>}
    </>

  )
}
