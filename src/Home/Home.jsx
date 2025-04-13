import React from 'react';
import tv from '../assets/tv.png';
import lapi from '../assets/lapi.png';
import { FaStar } from 'react-icons/fa';
import iphone from '../assets/iphone.png';
import mi from '../assets/m.jpg';
import speaker from '../assets/speakers.png';
import keyboard from '../assets/keyboard.jpg';
import headpone from '../assets/headphone.png';
import ImageSlider from './Slideimage';
import { useCart } from './cartContext';

function Home() {
  const imageUrls = [tv, lapi, iphone, headpone];
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Sony TV", price: 30000, actualPrice: 40000, img: tv,rating:"680" },
    { id: 2, name: "Acer Aspire", price: 45000, actualPrice: 60000, img: lapi,rating:"400" },
    { id: 3, name: "iPhone 14", price: 50000, actualPrice: 65000, img: iphone,rating:"500" },
    { id: 4, name: "IPS Monitor", price: 10000, actualPrice: 15000, img: mi,rating:"600" },
    { id: 5, name: "INTEX Speaker", price: 12000, actualPrice: 15000, img: speaker ,rating:"1.2k" },
    { id: 6, name: "Zebronics Keyboard", price: 1200, actualPrice: 1500, img: keyboard,rating:"3.3k" },
    { id: 7, name: "Boat Headphone", price: 1100, actualPrice: 1300, img: headpone,rating:"4.9k" },
  ];

  return (
    <div className="w-full pt-[100px] pb-10 px-2 sm:px-4 md:px-8">
      {/* Image Slider */}
      <ImageSlider images={imageUrls} />

      {/* Offer Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-700 to-blue-100 mt-7 text-center py-6 rounded">
        <span className="font-serif text-xl sm:text-2xl md:text-3xl block">Exclusive Festival Offer</span>
        <span className="font-serif text-lg sm:text-xl block mt-2">Get 30% To 40% Discount On Each Product</span>
        <span className="font-semibold text-xl sm:text-2xl md:text-3xl block mt-2">Upto 50% off</span>
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl text-slate-800 font-semibold py-6 px-2 sm:px-4">Electronics Items</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center bg-white hover:shadow-lg rounded-md p-4">
            <div className="w-full text-center relative">
              <img src={product.img} alt={product.name} className="w-full h-auto max-h-[180px] object-contain" />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                <span>4.1</span>
                <FaStar className="text-yellow-400 text-xs" />
                <span>| {product.rating}</span>
              </div>
            </div>
            <div className="mt-2 text-black text-center w-full">
              <div className="font-medium">{product.name}</div>
              <div>
                Rs. {product.price}
                <span className="text-sm text-gray-500 line-through ml-2">₹{product.actualPrice}</span>
              </div>
              <button
                className="mt-2 bg-blue-500 text-white px-9 py-1 rounded hover:bg-blue-700 text-lg"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
