"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import { useCart } from "@/contexts/cartContext";
import { logout } from "@/actions";
import Button from "./Button";

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

interface SideBarProps{
  session:any
}

const SideBar:React.FC<SideBarProps> = ({session})=>{
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();


  const handleLogout = async ()=>{
    await logout();
 }

  return (
    <>
      <div className="xl:hidden flex items-center justify-between px-4 py-4 border bg-white text-black ">
        <Button
          className="px-5 bg-white text-black border hover:bg-slate-50"
          onClick={() => setOpen(true)}
        >
          Menu
        </Button>
        <Link
          href="/cart"
          className="py-2 px-5 border hover:bg-slate-50 relative"
        >
          Cart
          {cart.length > 0 && (
            <div className="absolute size-6 bg-red-500 rounded-full top-0 left-full -translate-y-1/2 -translate-x-1/2 text-white flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </Link>
      </div>

      {open && (
        <div className="fixed top-0 left-0 bottom-0 right-0  bg-black bg-opacity-60 z-50" onClick={()=>setOpen(false)} />
      )}

      <div
        className={`fixed top-0 left-0 bottom-0 w-fit border bg-white text-black transition-transform duration-300 px-4 space-y-4 py-4 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="flex font-bold text-xl">LOGO</h1>
          <Button
            onClick={() => setOpen(false)}
            className="px-5 bg-white text-black border hover:bg-slate-50"
          >
            Close
          </Button>
        </div>

        <Search />

        <div className="flex flex-col">
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
         {session?.user ? (
          <Button onClick={handleLogout} className="font-medium">
            Logout
          </Button>
        ) : (
          pathname !== "/signup" && (
           
              <Link
                href="/signup"
                className="bg-black px-4 py-3 text-white font-medium text-center"
              >
                Sign Up
              </Link>
          
          )
        )}
        </div>
      </div>
    </>
  );
}

export default SideBar;
