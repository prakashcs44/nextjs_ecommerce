"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";

const navLinks = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/shop",
    text: "Shop",
  },
  {
    to: "/featured",
    text: "Featured",
  },
  {
    to: "/recommended",
    text: "Recommended",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=" bg-white flex items-center  py-2 px-20 border justify-between sticky top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-14">
        <div className="font-bold text-xl">Logo</div>

        <div className="flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              className={`${
                pathname !== item.to && "text-slate-500"
              } font-semibold hover:bg-black hover:bg-opacity-5 px-3 py-4 cursor-pointer transition-colors`}
              href={item.to}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-12">
        <Search />

        <Link href="/cart" className="py-2 px-5 border hover:bg-slate-50 relative">
          Cart
          <div className="absolute size-6 bg-red-500 rounded-full top-0 left-full -translate-y-1/2 -translate-x-1/2 text-white flex items-center justify-center">10</div>
          </Link>

        <div>
          <Link
            href="/signup"
            className="bg-black px-4 py-3 text-white font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
