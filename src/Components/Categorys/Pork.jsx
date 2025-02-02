import React, { useEffect, useState } from 'react'
import Meals from '../Meals';
import axios from 'axios';
import Loading from '../Loading';


export default function Pork() {

  let [error,setError] = useState('');
  let [arry,setArry] = useState([]);
  async function getMeal(){
  

  try{
      let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork`);
  
      setArry(data.meals);
  }
  catch(error){ 
    
    setError(error.message)
 
  }
 
  }


  useEffect(()=>{
    getMeal()
  },[]);



  return (
    <>
   {error==''? <>{arry.length?arry.map(ele=><Meals key={ele.idMeal} idMeal={ele.idMeal}  strMeal={ele.strMeal} strArea={ele.strArea} img={ele.strMealThumb}></Meals>):<Loading></Loading>}</>:<Loading error={error}></Loading>}
    </>
  )
}
