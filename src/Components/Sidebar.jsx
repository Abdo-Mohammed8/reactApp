import React from 'react';
import logo from './../assets/logo-BfNap0Pe.png';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
<aside className="side-bar">
    <button className="sm:hidden block py-2 px-3 text-orange-500" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
    <i className="fa-solid fa-bars fa-xl"></i>
    </button>
  <div id="drawer-example" className="fixed  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full sm:-translate-x-0 bg-white w-[260px] dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label " aria-hidden="true">
    <div className='logo'>
    <img src={logo} alt="Logo" />
    </div>
    <div className='side-iteam'>
      <Link className='active' to={'/'}><i className="fa-solid fa-utensils"></i> Meals</Link>
      <Link to={'/'}><i className="fa-solid fa-utensils"></i> Ingrdients</Link>
      <Link to={'/'}><i className="fa-solid fa-utensils"></i> Area</Link>
    </div>
  </div>
</aside>

</>

  )
}
