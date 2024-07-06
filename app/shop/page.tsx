import ProductCard from '@/components/ProductCard';
import React from 'react'

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics?limit=10");
  return await res.json();
};


const page = async ()=>{


  const products = await getProducts();


  return (
    <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-20 px-20 py-20'>
      {
        products.map((product:any)=><ProductCard key={product.id} product = {product}/>)
      }
    </div>
  )
}

export default page
