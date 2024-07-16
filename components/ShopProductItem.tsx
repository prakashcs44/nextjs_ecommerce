import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ShopProductItem = (props: any) => {

    const product = props.product;
  
    return (
      <div className="relative border shadow-md overflow-hidden group block">
          <Link
          href={`/product/${product?.id}`}
          className="border hover:shadow-md transition-shadow w-full h-full block pb-6"
        >
          <Image
            src={product?.images[0]}
            alt={product?.title}
            className="w-full  object-cover"
            width={700}
            height={700}
          />
          <div className="px-4 space-y-3 py-5">
            <h1 className="text-xl font-medium">{product?.title}</h1>
            <p>price: ${product?.price}</p>
          </div>
        </Link>
  
        <AddToCart
          product={product}
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
        />
      </div>
    );
  };


export default ShopProductItem;