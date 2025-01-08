import React from 'react'
import logo from '../../src/assets/Shahin.png'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
 
  return (
    <>
    <div className="navbar sticky top-0 z-50 bg-white border-b-2">
      <div className="container mx-auto ">
        <div className="desktop-navbar hidden  lg:flex lg:justify-between lg:items-center lg:py-2">
          <div className="logo w-[250px]">
            <Link to='/'> <img src={logo} alt="" /></Link>
          </div>
          <div className="menu-item flex items-center">
            <ul className='nav-item flex gap-4 text-lg font-medium uppercase'>
              <li className='transition-colors hover:text-Primary'> <Link to='/'>Home</Link> </li>
              <li className='transition-colors hover:text-Primary'> <Link to='/shop'>Shop</Link> </li>
              <li className='transition-colors hover:text-Primary'> <Link to='/about'>About</Link> </li>
              <li className='transition-colors hover:text-Primary'> <Link to='/contact'>Contact</Link> </li>
            </ul>
          </div>
          <div className="nav-right flex items-center">
            <ul className='flex gap-6 font-medium text-[24px] relative'>
              <li className='transition-colors hover:text-Primary'><Link to='/wishlist'><FaRegHeart/></Link></li>
              <li className='transition-colors hover:text-Primary'><Link to='/cart'><IoBagHandleSharp/></Link></li>
              <div className="qty-bg absolute right-8 top-1 bg-Primary text-white w-4 h-4 rounded-full text-xs ">
                <div className="qty-number text-center align-middle">10</div>
              </div>
              <li className='transition-colors hover:text-Primary'><Link to='/my-acount'><FaRegUserCircle/></Link></li>
            </ul>
          </div>
        </div>

        <div className="mobile-navbar px-4 py-2 flex justify-between lg:hidden">
        <div className="menu-icon flex items-center text-lg" >
        <FaBars />
        </div>
        <div className="logo w-[200px]">
            <Link to='/'> <img src={logo} alt="" /></Link>
          </div>
          <div className="nav-right  flex items-center">
            <ul className='flex gap-4 font-medium text-lg relative '>
              <li><Link to='/wishlist'><FaRegHeart/></Link></li>
              <li><Link to='/cart'><IoBagHandleSharp/></Link></li>
              <div className="qty absolute right-6 text-xs p-[1px] bg-Primary rounded-full">10</div>
              <li><Link to='/my-acount'><FaRegUserCircle/></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar