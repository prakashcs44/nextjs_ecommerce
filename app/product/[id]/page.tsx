
import React from 'react'


const fetchProduct = async (id:any)=>{
   const res = await fetch(`https://fakestoreapi.com/products/${id}`)
   return await res.json();
}


async function page(props:any) {

  const {id} = props.params; 
 
  const product = await fetchProduct(id);
  


  return (
    <div className=' flex gap-10  px-20 mt-20 '>

      <img src={product.image} alt = {product.title} className=' w-1/3'/>
      <div className='space-y-10'>
      <h1 className='font-bold text-3xl'>{product.title}</h1>
      <p>{product.description}</p>
      <p className='font-semibold text-xl'>Price: ${product.price}</p>
      <button className='bg-black py-2 px-4 text-white hover:bg-slate-800'>Add to Cart</button>
      </div>
     

    </div>
  )
}

export default page
