import React from 'react'
import Categorylist from './Categorylist'
import { Outlet } from 'react-router-dom'

export default function Categorylayout() {
  return (
    <>

<Categorylist/>    
<div className='container py-8 px-3'>
<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-28 '>
  <Outlet/>
</div>
</div>
    </>
  )
}
