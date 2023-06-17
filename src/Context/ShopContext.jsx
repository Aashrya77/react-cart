import React, { createContext, useEffect, useState } from "react";
import Data from "../Data/Data";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let i = 1; i < Data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [favItems, setFavItems] = useState([])
  const [menuIsOpen, setMenuIsOpen] = useState(false)



  const getTotal = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Data.find((product) => product.id === Number(item));
        totalAmt += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmt;
  };

 
 


 

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCart = (newInput, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newInput }));
  };

  const contextValue = {
    cartItems,
    getTotal,
    updateCart,
    addToCart,
    RemoveFromCart,
    favItems,
    setFavItems,
    menuIsOpen,
    setMenuIsOpen
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
