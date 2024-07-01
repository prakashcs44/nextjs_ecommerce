"use client"
import { useCart } from '@/contexts/cartContext';
import React from 'react'

function CartItem(props:any) {
  
  const product = props.product;
  const {removeItemFromCart} = useCart();
  

  


  return (
    <div className='flex items-start  md:items-center justify-between px-10 border py-3 gap-3'>
       
       <div className='flex flex-col md:flex-row gap-5  '>
        <img src={product?.image} alt = {product?.title} className=' md:w-44 w-20'/>
         
         <div>
          <h1 className='font-medium text-xl'>{product?.title}</h1>
          <p>Quantity: 1</p>
          <p>Price: ${product?.price}</p>
         </div>
        
       </div>

       <button className=' py-2 px-4 border bg-slate-50 hover:bg-slate-100' onClick={()=>removeItemFromCart(product?.id)}>X</button>
      
    </div>
  )
}

export default CartItem
