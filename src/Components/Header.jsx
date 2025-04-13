import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import logo from "../assets/myntra_log.png";
import { useCart } from '../Home/cartContext';

function Header() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-lg fixed z-50 w-full'>
      <div className='flex justify-between items-center px-4 py-3 md:px-8'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='w-10 md:w-14' />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden text-3xl text-black cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>

        {/* Main Nav */}
        <nav className='hidden md:flex space-x-6 text-black font-semibold'>
          <Link to='/home' className='hover:text-blue-700'>HOME</Link>
          <div className='hover:text-blue-700'>WOMEN</div>
          <div className='hover:text-blue-700'>KIDS</div>
          <div className='hover:text-blue-700'>MEN</div>
          <div className='hover:text-blue-700'>BEAUTY</div>
          <div className='hover:text-pink-600'>STUDIO <sup className='text-red-500'>New</sup></div>
        </nav>

        {/* Search Bar */}
        <div className='hidden md:block w-[30%]'>
          <input
            className="px-3 py-2 w-full outline-none text-black bg-gray-100 rounded text-sm"
            type="text"
            placeholder="Search for products and brands"
          />
        </div>

        {/* Icons Section */}
        <div className='hidden md:flex space-x-4 items-center'>
          <div className='text-center cursor-pointer'>
            <CgProfile className='text-2xl text-black mx-auto' />
            <div className='text-sm font-bold text-black'>Profile</div>
          </div>
          <div className='text-center cursor-pointer'>
            <CiHeart className='text-2xl text-black mx-auto' />
            <div className='text-sm font-bold text-black'>Wishlist</div>
          </div>
          <Link to='/cart' className='relative text-center cursor-pointer'>
            <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full'>
              {cartItems.length}
            </div>
            <HiOutlineShoppingBag className='text-2xl text-black mx-auto' />
            <div className='text-sm font-bold text-black'>Bag</div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <div className='flex flex-col space-y-3 font-semibold text-black'>
            <Link to='/home' className='hover:text-blue-700'>HOME</Link>
            <div className='hover:text-blue-700'>WOMEN</div>
            <div className='hover:text-blue-700'>KIDS</div>
            <div className='hover:text-blue-700'>MEN</div>
            <div className='hover:text-blue-700'>BEAUTY</div>
            <div className='hover:text-pink-600'>STUDIO <sup className='text-red-500'>New</sup></div>
            <input
              className="px-3 py-2 w-full outline-none bg-gray-100 rounded text-sm mt-2"
              type="text"
              placeholder="Search products & brands"
            />
            <div className='flex justify-between pt-3'>
              <div className='text-center'>
                <CgProfile className='text-2xl text-black mx-auto' />
                <div className='text-xs font-semibold'>Profile</div>
              </div>
              <div className='text-center'>
                <CiHeart className='text-2xl text-black mx-auto' />
                <div className='text-xs font-semibold'>Wishlist</div>
              </div>
              <Link to='/cart' className='relative text-center'>
                <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full'>
                  {cartItems.length}
                </div>
                <HiOutlineShoppingBag className='text-2xl text-black mx-auto' />
                <div className='text-xs font-semibold'>Bag</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
