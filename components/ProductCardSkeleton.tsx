import React from "react";

const ProductCardSkeleton = () => {
    return (
      <div className="space-y-3">
        <div className="skeleton h-60 " />
        <div className="skeleton h-8 w-3/4 " />
        <div className="skeleton h-4 w-1/2" />
      </div>
    );
  };

export default ProductCardSkeleton;