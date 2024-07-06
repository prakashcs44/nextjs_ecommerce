
import AddToCart from '@/components/AddToCart';
import React from 'react'
import Image from 'next/image';

const fetchProduct = async (id:any)=>{
   const res = await fetch(`https://fakestoreapi.com/products/${id}`)
   return await res.json();
}


async function page(props:any) {

  const {id} = props.params; 
 
  const product = await fetchProduct(id);
  


  return (
    <div className=' flex flex-col xl:flex-row gap-10 md:px-20 px-10 py-10'>

      <Image src={product.image} alt = {product.title} className=' xl:w-1/3 w-full' width = {800} height={800}/>
      <div className='space-y-10'>
      <h1 className='font-bold text-3xl'>{product.title}</h1>
      <p>{product.description}</p>
      <p className='font-semibold text-xl'>Price: ${product.price}</p>
       <AddToCart product = {product}/>
      </div>
     

    </div>
  )
}

export default page
