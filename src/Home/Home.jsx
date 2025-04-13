import React from 'react';
import tv from '../assets/tv.png';
import lapi from '../assets/lapi.png'
import { FaStar } from 'react-icons/fa'
import iphone from '../assets/iphone.png';
import mi from '../assets/m.jpg'
import speaker from '../assets/speakers.png'
import keyboard from '../assets//keyboard.jpg'
import headpone from '../assets/headphone.png'
import ImageSlider from './Slideimage';
import { useCart } from './cartContext';

function Home() {
  const imageUrls = [tv, lapi, iphone, headpone];
  const { cartItems,addToCart } = useCart(); // use the addToCart function

  const products = [
    { id: 1, name: "Sony TV", price: 30000, actualPrice: 40000, img: tv },
    { id: 2, name: "Acer Aspire", price: 45000, actualPrice: 60000, img: lapi },
    { id: 3, name: "iPhone 14", price: 50000, actualPrice: 65000, img: iphone },
    { id: 4, name: "IPS Monitor", price: 10000, actualPrice: 15000, img: mi },
    { id: 5, name: "INTEX Speaker", price: 12000, actualPrice: 15000, img: speaker },
    { id: 6, name: "Zebronics Keyboard", price: 1200, actualPrice: 1500, img: keyboard },
    { id: 7, name: "Boat Headphone", price: 1100, actualPrice: 1300, img: headpone },
  ];
  return (
    
    <div className='w-full pt-[100px] pb-10  '>
      <div className='text-black justify-center'>
        <div className='w-full'>
          <ImageSlider images={imageUrls} />
        </div>
        <div className='bg-gradient-to-r from-white via-blue-400 to-white mt-7 text-center py-6'>
          <span className='font-serif  text-3xl'> Exclusive Festival Offer </span><br/><br/>
          <span className='font-serif text-2xl'>Get 30% To 40% Discount On Each Product</span><br/><br/>
          <span className='font-semibold text-3xl  '>Upto 50%off</span>
        </div>
      </div>
      <h1 className='text-2xl text-slate-800 font-semibold py-6 px-8'>Electronics Items</h1>
      <div className='grid grid-cols-4 my-3'>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-xl'>
          <div className='w-[250px] text-black text-center relative p-2'>
            <img src={tv} alt='TV' className='w-full h-auto' />
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.1</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 200</span>
            </div>
          </div>
          <div className='mt-2 font-medium  text-black text-left w-full px-5'>Sony TV
            <br />Rs. 30000
            <span className='text-sm text-gray-500 line-through ml-2'>40000</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart({id: 1, name: "Sony TV", price: 30000, actualPrice: 40000, img: tv})}>+</button>
          </div>
        </div>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-xl'>
          <div className='w-[250px] text-black text-center relative p-2'>
            <img src={lapi} alt='TV' className='w-full h-auto' />
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.0</span>
              <FaStar className="text-yellow-400 text-xs" />
              <span>| 400</span>
            </div>
          </div>
          <div className='mt-2 font-medium  text-black text-left w-full px-3'>Acer Asp
            <br />
            Rs. 45000
            <span className="text-sm text-gray-500 line-through ml-2">₹60000</span>
            <button className=' text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart(products[1])}>+</button>
          </div>
        </div>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-lg'>
          <div className='w-[220px] text-black text-center relative p-2'>
            <img src={iphone} alt='mobile' className='w-full h-auto' />
            <br></br>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.5</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 1.2k</span>
            </div>
          </div>
          <div className='text-left text-black w-full px-5 font-medium mt-2'>iPhone 14
            <br />
            Rs.50000
            <span className='text-sm text-gray-500 line-through ml-2'>65000</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart(products[2])}>+</button>
          </div>
        </div>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-lg'>
          <div className='w-[220px] text-black text-center relative p-2'>
            <img src={mi} alt='mobile' className='w-full h-auto' />
            <br></br>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>3.8</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 20</span>
            </div>
          </div>
          <div className='text-left text-black w-full px-5 font-medium mt-2'>IPS Monitor <span className='text-gray-700'>21.5 inch</span>
            <br />
            Rs.10000
            <span className='text-sm text-gray-500 line-through ml-2'>15000</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart(products[3])}>+</button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4'>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-lg'>
          <div className='w-[220px] text-black text-center relative p-2'>
            <img src={speaker} alt='mobile' className='w-full h-auto' />
            <br></br>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.0</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 5k</span> 
            </div>
          </div>
          <div className='text-left text-black w-full px-5 font-medium mt-2'>INTEX Speaker
            <br />
            Rs.12000
            <span className='text-sm text-gray-500 line-through ml-2'>15000</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700
            ' onClick={()=>addToCart(products[4])}>+</button>
          </div>
        </div>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-lg'>
          <div className='w-[220px] text-black text-center relative p-2'>
            <img src={keyboard} alt='mobile' className='w-[140px] h-auto' />
            <br></br>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.4</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 2.2k</span>
            </div>
          </div>
          <div className='text-left text-black w-full px-5 font-medium mt-2'>Zebronics <span className='text-sm px-2 text-gray-700'>Keyboard and mouse</span>
            <br />
            Rs.1200
            <span className='text-sm text-gray-500 line-through ml-2'>1500</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart(products[5])}>+</button>
          </div>
        </div>
        <div className='flex flex-col items-center p-4 ml-2 bg-white hover:shadow-lg'>
          <div className='w-[220px] text-black text-center relative p-2'>
            <img src={headpone} alt='mobile' className='w-[200px] h-auto' />
            <br></br>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded flex items-center space-x-1'>
              <span>4.6</span>
              <FaStar className='text-yellow-400 text-xs' />
              <span>| 10.4k</span>
            </div>
          </div>
          <div className='text-left text-black w-full px-5 font-medium mt-2'>Boat <span className='text-sm px-2 text-gray-700'>HeadPhone</span>
            <br />
            Rs.1100
            <span className='text-sm text-gray-500 line-through ml-2'>1300</span>
            <button className='text-center ml-5 bg-blue-500 w-30 text-xl cursor-pointer hover:bg-blue-700'
            onClick={()=>addToCart({id: 7, name: "Boat Headphone", price: 1100, actualPrice: 1300, img: headpone})}>+</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;
