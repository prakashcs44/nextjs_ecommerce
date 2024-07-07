import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getProducts } from "@/utils/products";


const page = async () => {
  const products = await getProducts();

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 px-8 gap-20 md:px-20 py-20">
      {products.map((product: any) => (
        <MyCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const MyCard = (props: any) => {
  return (
    <div className="relative border shadow-md overflow-hidden group">
      <ProductCard product={props.product} />

      <AddToCart
        product={props.product}
        className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
      />
    </div>
  );
};

export default page;
