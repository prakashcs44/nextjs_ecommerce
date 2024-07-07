import AddToCart from '@/components/AddToCart';
import Button from '@/components/Button';
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
        products.map((product:any)=><MyCard key = {product.id} product = {product} />)
      }
    </div>
  )
}



const MyCard = (props:any)=>{
  return (
    <div className='relative border-2 overflow-hidden group'>
    <ProductCard product={props.product}/>
   
    <AddToCart product = {props.product} className = "absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200"/>
  
  </div>
  )
 
}

export default page
