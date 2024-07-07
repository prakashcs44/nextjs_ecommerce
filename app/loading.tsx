import ProductCardSkeleton from '@/components/ProductCardSkeleton'
import React from 'react'

function loading() {
  return (
    <div className="mt-10">
     <main className='skeleton w-[97vw] h-[80vh] mx-auto'/>
     <div className="mt-20 space-y-4">
        <h1 className="text-4xl font-semibold text-center">Featured Products</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-10 px-10">
           <ProductCardSkeleton/>
           <ProductCardSkeleton/>
           <ProductCardSkeleton/>
           <ProductCardSkeleton/>
           <ProductCardSkeleton/>
           <ProductCardSkeleton/>
        </div>
      </div>
    </div>
  )
}

export default loading
