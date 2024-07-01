"use client";
import { useCart } from "@/contexts/cartContext";
import React, { useEffect, useState } from "react";


function AddToCart(props: any) {
  const product = props.product;
  const [itemAdded, setItemAdded] = useState(false);
  const {cart,removeItemFromCart,addItemToCart} = useCart();

  useEffect(() => {
  

    if (cart.length === 0) return;

    const productExists = cart.find((p: any) => p.id === product.id);
    if (productExists) {
      setItemAdded(true);
    }
  }, [product]);

  const handler = () => {
    if (itemAdded) {
      removeItemFromCart(product.id);
      setItemAdded(false);
    } else {
      addItemToCart(product);
      setItemAdded(true);
    }
  };

  return (
    <button
      className="bg-black py-2 px-4 text-white hover:bg-slate-800"
      onClick={handler}
    >
      {itemAdded ? "Remove From Cart" : "Add To Cart"}
    </button>
  );
}

export default AddToCart;
