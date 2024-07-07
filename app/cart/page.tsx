"use client";
import React, { useMemo} from "react";
import CartItem from "@/components/CartItem";
import { useCart } from "@/contexts/cartContext";
import Button from "@/components/Button";


const SHIPPING_CHARGE = 10;




function page() {
  const { cart } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((acc: any, curr: any) => {
      return acc + curr.price;
    }, 0);
  }, [cart]);

  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-3xl">Your Cart</h1>
      {cart.length === 0 ? (
        <h1 className="text-center py-10 font-semibold text-2xl">
          No items found
        </h1>
      ) : (
        <div className=" py-10 flex flex-col gap-10 items-center">
          <div className="space-y-5  border py-5 px-5 w-[95%] md:w-3/4">
            {cart.map((product: any) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className="border px-6 py-5 space-y-5 h-fit md:w-1/2 w-3/4">
            <h1 className="text-2xl text-center">Order summary</h1>
            <div className="space-y-6">
              <div className="border-b flex justify-between">
                <p>Sub Total:</p>
                <p>${totalPrice}</p>
              </div>
              <div className="border-b flex justify-between">
                <p>Shipping:</p>
                <p>${SHIPPING_CHARGE}</p>
              </div>
              <div className="border-b font-semibold flex justify-between">
                <p>Order Total:</p>
                <p>${totalPrice + SHIPPING_CHARGE}</p>
              </div>
            </div>
            <Button className="w-full ">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
