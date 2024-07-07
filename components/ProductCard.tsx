import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Link
        href={`/product/${product?.id}`}
        className="border hover:shadow-md transition-shadow"
      >
        <Image
          src={product?.image}
          alt={product?.title}
          className="w-full h-60 object-cover"
          width={700}
          height={700}
        />
        <div className="px-4 space-y-3 py-5">
          <h1 className="text-xl font-medium">{product?.title}</h1>
          <p>price: ${product?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
