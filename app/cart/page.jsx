"use client"
import React from 'react'
import CartItem from "@/components/CartItem"

function page() {
  return (
    <div className='mt-10'>
      <h1 className='text-center font-bold text-3xl'>Your Cart</h1>
      <div className=' py-10 flex flex-col gap-10 items-center'>
        <div className='space-y-5  border py-5 px-5 w-3/4'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        </div>
        <div className='border px-6 py-5 space-y-5 h-fit w-1/2'>
         <h1 className='text-2xl text-center'>Order summary</h1>
         <div className='space-y-6'>
            <div className='border-b flex justify-between'>
                <p>Sub Total:</p>
                <p>$8000</p>

            </div>
            <div className='border-b flex justify-between'>
                <p>Shipping:</p>
                <p>$10</p>

            </div>
            <div className='border-b font-semibold flex justify-between'>
                <p>Order Total:</p>
                <p>$8010</p>

            </div>
         </div>
         <button className=' px-3 py-2 bg-black text-white w-full hover:bg-slate-800'>Checkout</button>
        </div>
      </div>
   
    </div>
  )
}

export default page
