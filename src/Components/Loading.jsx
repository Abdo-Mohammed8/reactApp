import React from 'react';

export default function Loading(props) {
  // console.log(props.error);
  return (
    <>
    <div className="flex justify-center items-center">
    <span className="loader"></span>
    </div>
    {props.error!==''?<h2 className='text-center text-6xl'>{props.error}</h2>:''}
    </>
  )
}
