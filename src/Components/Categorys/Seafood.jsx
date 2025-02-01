import React, { useEffect, useState } from 'react';
import Meals from '../Meals';
import axios from 'axios';
import Loading from '../Loading';
import Categorynames from '../Categorynames';

export default function Seafood() {

  let [error,setError] = useState('');
  let [arry,setArry] = useState([]);

  async function getMeal(){
  

  try{
      let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
  
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
   {error==''? <>
    
    <Categorynames/>
    <div className='container py-8 px-3'>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-28 '>
    {arry.length?arry.map(ele=><Meals key={ele.idMeal} idMeal={ele.idMeal}  strMeal={ele.strMeal} strArea={ele.strArea} img={ele.strMealThumb}></Meals>):<Loading></Loading>}
    </div>
    </div>
    
    </>:<Loading error={error}></Loading>}
    </>
  )
}
