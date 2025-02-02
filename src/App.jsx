
import './css/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import Notfound from './Components/Notfound';
import Mainlayout from './Components/Mainlayout';
import Categorylayout from './Components/Categorylayout';
import Mealdetails from './Components/Mealdetails';



function App() {

  const router = createBrowserRouter([{
   path:'/' ,element : <Mainlayout/>,children:[
    {path:'/',element:<Categorylayout/> ,children:[
      {index:true,element:<All></All>},
      {path:'category/beef', element:<Beef></Beef>},
      {path:'category/breakfast' , element:<Breakfast/>},
      {path:'category/chicken' , element:<Chicken/>},
      {path:'category/dessert' , element:<Dessert/>},
      {path:'category/goat' , element:<Goat/>},
      {path:'category/lamb' , element:<Lamb/>},
      {path:'category/miscellaneous' , element:<Miscellaneous/>},
      {path:'category/pasta' , element:<Pasta/>},
      {path:'category/pork' , element:<Pork/>},
      {path:'category/seafood' , element:<Seafood/>},
      {path:'category/side' , element:<Side/>},
      {path:'category/starter' , element:<Starter/>},
      {path:'category/vegan' , element:<Vegan/>},
      {path:'category/vegetarian' , element:<Vegetarian/>},
    ]},
      
    {path:'mealdetails' , element:<Mealdetails/>},
    {path:'*' , element:<Notfound/>},
    ,
      
    ] 
  }

  ])



  return (<>
  
   <RouterProvider router ={router}></RouterProvider>
   
   </>
  )
}

export default App


