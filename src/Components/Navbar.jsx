import React, { useState } from 'react';
import logo from '../../src/assets/Shahin.png'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Navbar = () => { const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  let cartData = useSelector((state) => state.cartItemManager.cartItems);
  let totalQty = 0;
  for (let i = 0; i < cartData.length; i++) {
    let item = cartData[i];
    totalQty += item.qty;
  }
  return (
    <div className="navbar sticky top-0 z-50 bg-white border-b-2">
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="desktop-navbar hidden lg:flex lg:justify-between lg:items-center lg:py-2">
          <div className="logo w-[250px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu-item flex items-center">
            <ul className="nav-item flex gap-4 text-lg font-medium uppercase">
              <li className="transition-colors hover:text-Primary">
                <Link to="/">Home</Link>
              </li>
              <li className="transition-colors hover:text-Primary">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="transition-colors hover:text-Primary">
                <Link to="/about">About</Link>
              </li>
              <li className="transition-colors hover:text-Primary">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right flex items-center">
            <ul className="flex gap-6 font-medium text-[24px] relative">
              <li className="transition-colors hover:text-Primary">
                <Link to="/wishlist">
                  <FaRegHeart />
                </Link>
              </li>
              <li className="transition-colors hover:text-Primary">
                <Link to="/cart">
                  <IoBagHandleSharp />
                </Link>
              </li>
              <div className="qty-bg absolute right-8 top-1 bg-Primary text-white w-4 h-4 rounded-full text-xs">
                <div className="qty-number text-center align-middle">{totalQty}</div>
              </div>
              <li className="transition-colors hover:text-Primary">
                <Link to="/my-account">
                  <FaRegUserCircle />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="mobile-navbar px-4 py-2 flex justify-between lg:hidden">
        <div className="logo w-[150px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu-icon flex items-center text-lg" onClick={toggleMobileMenu}>
            <FaBars />
          </div>
          
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ width: '250px' }} >
          <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link to="/">
              <img className='w-48' src={logo} alt="Logo" />
            </Link>
            <button
              className="text-xl font-semibold transition-colors hover:text-Primary"
              onClick={toggleMobileMenu}> &times;
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
            <li className="transition-colors hover:text-Primary">
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/shop" onClick={toggleMobileMenu}>
                Shop
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/wishlist" onClick={toggleMobileMenu}>
                Wishlist
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/cart" onClick={toggleMobileMenu}>
                Cart
              </Link>
            </li>
            <li className="transition-colors hover:text-Primary">
              <Link to="/my-account" onClick={toggleMobileMenu}>
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar