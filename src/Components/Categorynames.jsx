
import { NavLink, useNavigate } from 'react-router-dom';


export default function Categorynames() {


  let navigate = useNavigate();
  
  
   
  return (
<>
<div className='container px-4 py-8'>
  <div className='cat-group mb-20'>
    <h1 className="main-header  my-8 font-bold p-4">Learn, Cook, Eat Your Food</h1>
  <div className='sm:hidden mt-8'>
    <label htmlFor="tabs" className="sr-only">Select your country</label>

  <select id="tabs"onChange={e=>{navigate(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500/50 focus:border-blue-500/50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500/50 dark:focus:border-blue-500/50">
    <option value="/Beef">Beef</option>
    <option value="/Breakfast">Breakfast</option>
    <option value="/Chicken">Chicken</option>
    <option value="/Dessert">Dessert</option>
    <option value="/Goat">Goat</option>
    <option value="/Lamb">Lamb</option>
    <option value="/Miscellaneous">Miscellaneous</option>
    <option value="/Pasta">Pasta</option>
    <option value="/Pork">Pork</option>
    <option value="/Seafood">Seafood</option>
    <option value="/Side">Side</option>
    <option value="/Starter">Starter</option>
    <option value="/Vegan">Vegan</option>
    <option value="/Vegetarian">Vegetarian</option>
    </select>
 
  </div>
 <ul className="cat-grpup sm:flex hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
  <li className="me-2"><NavLink className="inline-block  px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " to={'/'}>All</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Beef'}>Beef</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Breakfast'} >Breakfast</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Chicken'} >Chicken</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Dessert'} >Dessert</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Goat'} >Goat</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Lamb'} >Lamb</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Miscellaneous'} >Miscellaneous</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Pasta'} >Pasta</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Pork'} >Pork</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Seafood'} >Seafood</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Side'} >Side</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Starter'} >Starter</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Vegan'} >Vegan</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/Vegetarian'} >Vegetarian</NavLink></li>
</ul>
 </div>
</div>
</>
    
 )
}
