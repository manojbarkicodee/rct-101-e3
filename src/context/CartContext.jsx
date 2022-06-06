import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let [products,setproducts]=useState([])
  return <CartContext.Provider value={{products,setproducts}} >{children}</CartContext.Provider>;
};
