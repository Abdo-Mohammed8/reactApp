import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

export default function Mealdetails() {
    let {state}= useLocation();
    
    let [arry,setArry] = useState([]);

async function getRecips(idMeal) {

    try {
        let{data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  
         setArry(data.meals);
  
      }
    
    catch (error) {
        console.error(error);
        }
    }
    

    useEffect(()=>{
        getRecips(state)
    },[state])  
    

    

    return (<>
    {arry.length>0? <div className="container p-4">
      <div className="flex gap-4 flex-col lg:flex-row ">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">{arry[0].strMeal}</h1>
          <div className="grid gap-4 items-stretch lg:grid-cols-2">
            <div><img className="w-full rounded-2xl mb-8" src={arry[0].strMealThumb} alt="Burek" />
              <ul className="flex gap-4 justify-center ">
                <li className="">
                <a target="_blank" href={arry[0].strYoutube} className="bg-red-600 text-xl text-white py-2 px-4 rounded-lg"><i className="fa-brands fa-youtube"></i> youtube </a>
              </li><li className="">
                  <a target="_blank" href={arry[0].strSource} className="bg-green-400  text-white text-xl py-2 px-4 rounded-lg">
                  <i class="fa-solid fa-globe"></i> source </a>
                </li></ul>
            </div><p className="text-lg">{arry[0].strInstructions}</p>
          </div>
        </div>
        <div className="lg:w-1/3 p-4">
        <div className="bg-white rounded-2xl p-4"><h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">Ingredients</h3>
          {arry[0].strIngredient1!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient1}</span><span>{arry[0].strMeasure1}</span></div>:''}
          {arry[0].strIngredient2!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient2}</span><span>{arry[0].strMeasure2}</span></div>:''}
          {arry[0].strIngredient3!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient3}</span><span>{arry[0].strMeasure3}</span></div>:''}
          {arry[0].strIngredient4!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient4}</span><span>{arry[0].strMeasure4}</span></div>:''}
          {arry[0].strIngredient5!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient5}</span><span>{arry[0].strMeasure5}</span></div>:''}
          {arry[0].strIngredient6!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient6}</span><span>{arry[0].strMeasure6}</span></div>:''}
          {arry[0].strIngredient7!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient7}</span><span>{arry[0].strMeasure7}</span></div>:''}
          {arry[0].strIngredient8!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient8}</span><span>{arry[0].strMeasure8}</span></div>:''}
          {arry[0].strIngredient9!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient9}</span><span>{arry[0].strMeasure9}</span></div>:''}
          {arry[0].strIngredient10!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient10}</span><span>{arry[0].strMeasure10}</span></div>:''}
          {arry[0].strIngredient11!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient11}</span><span>{arry[0].strMeasure11}</span></div>:''}
          {arry[0].strIngredient12!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient12}</span><span>{arry[0].strMeasure12}</span></div>:''}
          {arry[0].strIngredient13!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient13}</span><span>{arry[0].strMeasure13}</span></div>:''}
          {arry[0].strIngredient14!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient14}</span><span>{arry[0].strMeasure14}</span></div>:''}
          {arry[0].strIngredient15!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient15}</span><span>{arry[0].strMeasure15}</span></div>:''}
          {arry[0].strIngredient16!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient16}</span><span>{arry[0].strMeasure16}</span></div>:''}
          {arry[0].strIngredient17!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient17}</span><span>{arry[0].strMeasure17}</span></div>:''}
          {arry[0].strIngredient18!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient18}</span><span>{arry[0].strMeasure18}</span></div>:''}
          {arry[0].strIngredient19!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient19}</span><span>{arry[0].strMeasure19}</span></div>:''}
          {arry[0].strIngredient20!=''?<div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "><span>{arry[0].strIngredient20}</span><span>{arry[0].strMeasure20}</span></div>:''}
   
        </div>
        </div>
        </div>
        </div>:<Loading/>}
        </>
    )
}
