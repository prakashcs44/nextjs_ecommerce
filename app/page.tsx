import Link from "next/link";
import ProductCard from "@/components/ProductCard";

//https://fakestoreapi.com

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics?limit=5");
  return await res.json();
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="mt-10">
      <main className="home-main flex items-center justify-center flex-col gap-10 text-white">
        <h1 className="text-4xl">Upgrade Your Tech with Our Latest Laptops</h1>
        <p className="text-lg max-w-md text-center">
          Experience cutting-edge performance and sleek design with our newest
          collection of laptops
        </p>
        <Link
          href="/shop"
          className="bg-violet-600 px-5 py-2  hover:bg-violet-700 transition duration-300"
        >
          Shop Now
        </Link>
      </main>
      
      <div className="mt-20 space-y-4">
        <h1 className="text-4xl font-semibold text-center">Products</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-10 px-10">
          {
            products.map((product:any)=><ProductCard key={product.id} product={product}/>)
          }
            
            
        </div>
      </div>
    </div>
  );
}
