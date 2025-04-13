import React from "react";
import { useCart } from "../Home/cartContext";

function AddToCart() {
    const { addToCart ,cartItems, removeFromCart , decreaseQuantity} = useCart();
    const subtotal = cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;

    return (
        <div className="text-black bg-slate-200 h-full w-full pt-[100px] overflow-x-hidden ">
            <div className="py-20 px-20">
                <h1 className="text-3xl text-center py-2 px-3 font-bold text-red-500">My Cart</h1>

                <div className="border-b-2 border-red-500">
                    <div className="w-full flex bg-red-400 px-2 py-1 text-xl">
                        <h1 className="w-[55%]">Product</h1>
                        <h1 className="w-[20%]">Quantity</h1>
                        <h1 className="w-[25%] text-right">SubTotal</h1>
                    </div>

                    {/* Map over cart items */}
                    {cartItems.map((item, index) => (
                        <div className="bg-white flex border-b" key={item.id || index}>
                            <div className="w-[55%] py-2 px-2 flex space-x-2">
                                <img src={item.img} className="w-[100px] bg-slate-200" alt={item.name} />
                                <div>
                                    <h1 className="font-bold py-1">{item.name}</h1>
                                    <h1 className="font-medium text-gray-800 py-1">Price: Rs.{item.price}</h1>
                                    <button
                                        className="text-red-600 py-1 font-medium cursor-pointer hover:text-red-700"
                                        onClick={() => removeFromCart(item.id)}>Remove </button>
                                </div>
                                <div className="justify-center text-right w-[60%] py-7 space-x-1">
                                    <button className="w-30 font-bold text-xl cursor-pointer text-white bg-blue-500"
                                    onClick={()=>addToCart(item)}>+</button>
                                    <button className="w-30 font-bold text-xl cursor-pointer text-white bg-red-500"
                                    onClick={()=>decreaseQuantity(item.id)}>-</button>
                                </div>
                            </div>
                            <div className="w-[45%]">
                                <div className="flex py-4">
                                    <div className="pt-5 w-[50%]">
                                        <span className="border-2 border-gray-400 py-2 px-4">{item.quantity}</span>
                                    </div>
                                    <div className="text-right w-[50%] py-8 px-3">
                                        Rs.{item.price} X {item.quantity}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price Summary */}
                <div className="w-[45%] float-end bg-white py-2 px-3 mb-5 flex">
                    <div className="w-[50%] flex flex-col">
                        <span className="py-1 px-3">SubTotal</span>
                        <span className="py-1 px-3">Delivery Fee</span>
                        <span className="py-1 px-3 font-semibold">Total</span>
                    </div>
                    <div className="w-[50%] flex text-end flex-col">
                        <span className="py-1 px-2">Rs.{subtotal}</span>
                        <span className="py-1 px-2">Rs.{deliveryFee}</span>
                        <span className="py-1 px-2 font-semibold">Rs.{total}</span>
                        <button className="bg-red-500 text-xl text-white rounded-3xl py-1 mt-2">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
