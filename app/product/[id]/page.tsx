
import AddToCart from '@/components/AddToCart';
import React from 'react'
import Image from 'next/image';
import { getProductById } from '@/utils/products';
import Carousel from '@/components/Carousel';



async function page(props:any) {

  const {id} = props.params; 
 
  const product = await getProductById(id);
  


  return (
    <div className=' flex flex-col xl:flex-row gap-10 md:px-20 px-10 py-10'>
       <Carousel images={product?.images}/>
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
