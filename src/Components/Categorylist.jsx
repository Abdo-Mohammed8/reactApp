
import { NavLink, useNavigate } from 'react-router-dom';

export default function Categorylist() {

  let navigate = useNavigate();
  
  function handleCategory(event) {
    navigate(event);
  }

   
  return (
<>
<div className='container px-4 py-8'>
  <div className='cat-group mb-20'>
    <h1 className="main-header  my-8 font-bold p-4">Learn, Cook, Eat Your Food</h1>
  <div className='sm:hidden mt-8 '>

  <select   id="tabs"onChange={e=>{handleCategory(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500/50 focus:border-blue-500/50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500/50 dark:focus:border-blue-500/50">
    <option value="/">All</option>
    <option value="/category/beef">Beef</option>
    <option value="/category/breakfast">Breakfast</option>
    <option value="/category/chicken">Chicken</option>
    <option value="/category/dessert">Dessert</option>
    <option value="/category/goat">Goat</option>
    <option value="/category/lamb">Lamb</option>
    <option value="/category/miscellaneous">Miscellaneous</option>
    <option value="/category/pasta">Pasta</option>
    <option value="/category/pork">Pork</option>
    <option value="/category/seafood">Seafood</option>
    <option value="/category/side">Side</option>
    <option value="/category/starter">Starter</option>
    <option value="/category/vegan">Vegan</option>
    <option value="/category/vegetarian">Vegetarian</option>
    </select>
 
  </div>
 <ul className="cat-grpup sm:flex hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
  <li className="me-2"><NavLink className="inline-block  px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " to={'/'}>All</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/beef'}>Beef</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/breakfast'} >Breakfast</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/chicken'} >Chicken</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/dessert'} >Dessert</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/goat'} >Goat</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/lamb'} >Lamb</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/miscellaneous'} >Miscellaneous</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/pasta'} >Pasta</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/pork'} >Pork</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/seafood'} >Seafood</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/side'} >Side</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/starter'} >Starter</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/vegan'} >Vegan</NavLink></li>
  <li className="me-2"><NavLink className="btn" to={'/category/vegetarian'} >Vegetarian</NavLink></li>
</ul>
 </div>

</div>
</>
    
 )
}
