import React from "react";
import { useCart } from "../Home/cartContext";

function AddToCart() {
  const { addToCart, cartItems, removeFromCart, decreaseQuantity } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="text-black bg-slate-200 min-h-screen pt-[80px] px-4 md:px-20">
      <h1 className="text-2xl md:text-3xl text-center py-4 font-bold text-red-500">My Cart</h1>

      {/* Cart Header */}
      <div className="hidden md:flex border-b-2 border-red-500 bg-red-400 px-2 py-2 text-lg font-semibold">
        <div className="w-[55%]">Product</div>
        <div className="w-[20%]">Quantity</div>
        <div className="w-[25%] text-right">SubTotal</div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <div key={item.id || index} className="bg-white border-b p-3 md:flex md:items-center">
          <div className="md:w-[55%] flex flex-col md:flex-row space-x-0 md:space-x-3">
            <img src={item.img} className="w-24 h-24 object-cover bg-slate-200 mx-auto md:mx-0" alt={item.name} />
            <div className="mt-2 md:mt-0">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-gray-700">Price: Rs.{item.price}</p>
              <button
                className="text-red-600 mt-1 text-sm hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between md:w-[45%] mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xl"
              >
                -
              </button>
              <span className="px-3 py-1 border border-gray-300">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 text-white px-2 py-1 rounded text-xl"
              >
                +
              </button>
            </div>
            <div className="text-right font-semibold">
              Rs.{item.price} x {item.quantity}
            </div>
          </div>
        </div>
      ))}

      {/* Price Summary */}
      <div className="bg-white p-4 mt-6 md:w-[50%] md:ml-auto rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
        <div className="flex justify-between py-1">
          <span>SubTotal</span>
          <span>Rs.{subtotal}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Delivery Fee</span>
          <span>Rs.{deliveryFee}</span>
        </div>
        <div className="flex justify-between py-1 font-bold">
          <span>Total</span>
          <span>Rs.{total}</span>
        </div>
        <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-xl font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default AddToCart;

