import React from 'react'

function CartItem() {

  

  return (
    <div className='flex items-center justify-between px-10 border py-3 gap-3'>
       
       <div className='flex gap-5'>
        <div className='size-20 bg-slate-300'/>
         
         <div>
          <h1 className='font-medium text-xl'>Laptop</h1>
          <p>Quantity: 1</p>
          <p>Price: $100000</p>
         </div>
        
       </div>

       <button className=' py-2 px-4 border bg-slate-50 hover:bg-slate-100'>X</button>
      
    </div>
  )
}

export default CartItem
