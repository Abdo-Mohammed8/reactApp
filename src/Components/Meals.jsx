
import React from 'react';
import { Link } from 'react-router-dom';



export default function Meals(props) {
    

 
    


    

  return (

    
    

    <div className='meal'>   
        <div className="meal-img">
        <img src={props.img}  alt={`${props.strMeal.split(' ').slice(0, 2).join(' ')}`} />
        </div>
        <h2>{props.strMeal.split(' ').slice(0, 2).join(' ')}</h2>
        <p className={props.strArea ? '':'hidden'}><i className="fa-solid fa-earth-americas"></i> {props.strArea}</p>
        <Link to={'/Recips'} state={props.idMeal}>View Recips</Link>
      </div>
    
    
        
        
  )
}
