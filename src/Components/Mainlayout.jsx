
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


export default function Mainlayout() {

        
  return (
<>
<Sidebar/>
<div className='p-4 overflow-hidden sm:ml-64 min-h-screen'>
<Outlet/>
</div>
<Footer/>
</>
  )
}
