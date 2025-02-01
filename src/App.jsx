
import './css/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import All from './Components/Categorys/All';
import Beef from './Components/Categorys/Beef';
import Breakfast from './Components/Categorys/Breakfast';
import Chicken from './Components/Categorys/Chicken';
import Dessert from './Components/Categorys/Dessert';
import Goat from './Components/Categorys/Goat';
import Lamb from './Components/Categorys/Lamb';
import Miscellaneous from './Components/Categorys/Miscellaneous';
import Pasta from './Components/Categorys/Pasta';
import Pork from './Components/Categorys/Pork';
import Seafood from './Components/Categorys/Seafood';
import Side from './Components/Categorys/Side';
import Vegan from './Components/Categorys/Vegan';
import Vegetarian from './Components/Categorys/Vegetarian';
import Starter from './Components/Categorys/Starter';
import Recips from './Components/Recips';
import Notfound from './Components/Notfound';



function App() {

  const router = createBrowserRouter([{
   path:'/' ,element : <Layout></Layout>,children:[
      {index:true, element : <All></All>},
      {path:'/Beef', element:<Beef></Beef>},
      {path:'/Breakfast' , element:<Breakfast/>},
      {path:'/Chicken' , element:<Chicken/>},
      {path:'/Dessert' , element:<Dessert/>},
      {path:'/Goat' , element:<Goat/>},
      {path:'/Lamb' , element:<Lamb/>},
      {path:'/Miscellaneous' , element:<Miscellaneous/>},
      {path:'/Pasta' , element:<Pasta/>},
      {path:'/Pork' , element:<Pork/>},
      {path:'/Seafood' , element:<Seafood/>},
      {path:'/Side' , element:<Side/>},
      {path:'/Starter' , element:<Starter/>},
      {path:'/Vegan' , element:<Vegan/>},
      {path:'/Vegetarian' , element:<Vegetarian/>},
      {path:'/Recips' , element:<Recips/>},
      {path:'*' , element:<Notfound/>},
    ] 
  }

  ])



  return (<>
  
   <RouterProvider router ={router}></RouterProvider>
   
   </>
  )
}

export default App


