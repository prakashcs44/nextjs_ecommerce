"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import { useCart } from "@/contexts/cartContext";
import { logout } from "@/actions";

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

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const pathname = usePathname();
  const { cart } = useCart();

  const handleLogout = async ()=>{
     await logout();
  }

  return (
    <nav className="xl:flex items-center  py-2 px-20 border justify-between sticky top-0 left-0 right-0 z-50 hidden bg-white">
      <div className="flex items-center gap-14">
        <div className="font-bold text-xl">Logo</div>

        <div className="gap-8 flex">
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

      <div className="flex items-center lg:gap-12 gap-10 ">
        <Search />

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

        {session?.user ? (
          <button onClick={handleLogout} className="bg-black px-4 py-3 text-white font-medium">
            Logout
          </button>
        ) : (
          pathname !== "/signup" && (
            <div>
              <Link
                href="/signup"
                className="bg-black px-4 py-3 text-white font-medium"
              >
                Sign Up
              </Link>
            </div>
          )
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
