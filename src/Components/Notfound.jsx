import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function Notfound() {

    const navigate = useNavigate();

    useEffect(()=>{
       setTimeout(()=>{
            navigate('/');
        },3000);
      },[]);

  return (
    <div className='flex gap-7 justify-center flex-col  items-center h-60' >
        <h2 className='text-6xl text-red-600 '>Invalid path <i className="fa-solid fa-triangle-exclamation"></i></h2>
        <div className='flex gap-4 text-2xl text-gray-600 me-4'>
        <h3>Redirecting to home page...</h3>
        <Loading></Loading>
        </div>
    </div>    
  )
}
