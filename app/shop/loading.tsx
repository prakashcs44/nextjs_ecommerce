
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import React from "react";

const Item = () => {
  return (
    <div className="space-y-3">
      <div className="skeleton h-60 " />
      <div className="skeleton h-8 w-3/4 " />
      <div className="skeleton h-4 w-1/2" />
    </div>
  );
};

function loading() {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-20 py-20">
      <ProductCardSkeleton/>
      <ProductCardSkeleton/>
      <ProductCardSkeleton/>
      <ProductCardSkeleton/>
      <ProductCardSkeleton/>
      <ProductCardSkeleton/>
    </div>
  );
}

export default loading;
