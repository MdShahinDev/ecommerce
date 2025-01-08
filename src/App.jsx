import './App.css'
import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import MyAccount from './Pages/MyAccount';
import RootLayout from './Components/RootLayout';
function App() {
  let myrouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/my-acount' element={<MyAccount/>} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myrouter}/>
    </>
  )
}

export default App
