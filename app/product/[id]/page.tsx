
import AddToCart from '@/components/AddToCart';
import React from 'react'
import Image from 'next/image';
import { getProductById } from '@/utils/products';
import Carousel from '@/components/Carousel';



async function page(props:any) {

  const {id} = props.params; 
 
  const product = await getProductById(id);
  


  return (
    <div className='flex  flex-col items-center xl:flex-row gap-20 md:px-20 px-10 py-10'>
       <div className='md:w-5/12 w-3/4'>
       <Carousel images={product?.images}/>
       </div>
      
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
