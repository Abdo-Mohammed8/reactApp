import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

export default function Recips() {
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
              <ul className="flex gap-4 justify-center"><li className="bg-red-600 text-xl text-white py-2 px-4 rounded-lg ">
                <a target="_blank" href={arry[0].strYoutube} className="flex gap-2 justify-center items-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg> youtube </a>
              </li><li className="bg-green-400  text-white text-xl py-2 px-4 rounded-lg ">
                  <a target="_blank" href={arry[0].strSource} className="flex gap-2 justify-center items-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g />
                      <path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z" /></svg> source </a>
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
