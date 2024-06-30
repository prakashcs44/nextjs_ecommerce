

import React  from 'react'
import Link from 'next/link'

interface ProductCardProps{
    product:any
    key:React.Key

}





const ProductCard:React.FC<ProductCardProps> = ({product})=>{

 
  
  


  return (
    <Link href={`/product/${product?.id}`} className='border hover:shadow-md transition-shadow'>
      
       <img src = {product?.image} alt = {product?.title} className='w-full h-60 object-cover' />
       <div className='px-4 space-y-3 py-5'>
       <h1 className='text-xl font-medium'>{product?.title}</h1>
       <p>price: ${product?.price}</p>
       </div>
     
    </Link>
  )
}

export default ProductCard
