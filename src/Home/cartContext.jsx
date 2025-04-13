import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems(prev =>{
      const existingItem=prev.find(item=>item.id===product.id);
      if(existingItem){
        return prev.map(item=>
          item.id===product.id?
          {...item ,quantity:item.quantity+1}
          : item
        );
      }else{
        return[...prev,{...product,quantity:1}];
      }
    });
  };
  const decreaseQuantity=(id)=>{
    setCartItems(prev =>
      prev.map(item=>{
        if(item.id===id){
          if(item.quantity===1) return null;
          return {...item ,quantity:item.quantity-1};
        }
        return item;
      }).filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
