
import React from "react";
import { getProducts } from "@/utils/products";
import ShopProductItem from "@/components/ShopProductItem";



const page = async () => {
  const products = await getProducts();

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 px-8 gap-20 md:px-20 py-20">
      {products.map((product: any) => (
        <ShopProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};



export default page;
