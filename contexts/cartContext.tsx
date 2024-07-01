"use client";

import { addItem, getCart, removeItem } from "@/utils/localStorage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<any>({});

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeItemFromCart = (id: any) => {
    removeItem(id);
    setCart(getCart());
  };

  const addItemToCart = (item: any) => {
    addItem(item);
    setCart(getCart());
  };

  useEffect(() => {
    setCart(getCart());

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "cart" && event.newValue) {
        setCart(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <CartContext.Provider value={{ cart, removeItemFromCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => {
  return useContext(CartContext);
};
