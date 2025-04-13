import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import logo from "../assets/myntra_log.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useCart } from '../Home/cartContext';

function Header() {
  const {cartItems} =useCart();
  return (
    <div className='flex bg-white shadow-lg fixed z-50 w-full px-6'>
      <div className='text-2xl font-bold py-5 px-10 w-[15%]'>
        <img src={logo} />
      </div>
      <div className='flex space-x-11 text-black font-semibold w-[40%]'>
        <Link to='/home' className='hover:border-b-3  border-blue-800 py-8 cursor-pointer'>HOME</Link>
        <div className='hover:border-b-3 border-blue-800 py-8 cursor-pointer'>WOMEN</div>
        <div className='hover:border-b-3 border-orange-400 py-8 cursor-pointer'>KIDS</div>
        <div className='hover:border-b-3 border-blue-800 py-8 cursor-pointer'>MEN</div>
        <h1 className='hover:border-b-3 border-blue-800 py-8 cursor-pointer'>BEAUTY</h1>
        <h1 className='hover:border-b-3 border-pink-500 py-8 cursor-pointer'>STUDIO<sup className='text-red-500'>New</sup></h1>
      </div>
      <div className='ml-20 mr-7 py-7 w-[30%] text-black'>
        <input className="px-3 h-9 w-full outline-none bg-gray-200" type="text" placeholder="Search for products and brands" />
      </div>
      <div className='flex space-x-3 py-6 w-[15%]  justify-end '>
        <div className=' cursor-pointer'>
          <CgProfile className='text-3xl text-black' />
          <div className='text-sm font-bold text-black'>Profile</div>
        </div>
        <div className='cursor-pointer'>
          <CiHeart className='text-3xl text-black' />
          <div className='text-sm text-black font-bold'>Wishlist</div>
        </div>
        <Link to='/cart' className="relative cursor-pointer">
          <div className="absolute -top-2 -right-2  bg-red-500 text-white text-xs px-1 rounded-full">{cartItems.length}</div>
          <HiOutlineShoppingBag className="text-3xl text-black" />
          <div className="px-1 text-sm font-bold text-black">Bag</div>
        </Link>
      </div>

    </div>

  )
}
export default Header;