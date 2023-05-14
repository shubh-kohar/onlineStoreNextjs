"use client";

import Link from "next/link";
import { useContext } from "react";
import {
  AiOutlineHeart,
  AiOutlineLogin,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CartContext } from "../contexts/mycartContext";

const Header = () => {
  const cart = useContext(CartContext);
  return (
    <div className="flex flex-row p-2 justify-between items-center sticky top-0 bg-white shadow-sm z-50 px-10">
      <Link href="/">
        <h1 className="font-bold bg-purple-500 p-2 text-white  skew-y-2">
          CustomMonkey
        </h1>
      </Link>

      <div className="flex bg-slate-100 items-center p-2 w-1/2 space-x-2">
        <BiSearch size={25} />

        <input
          type="text"
          className="bg-transparent outline-none flex-1"
          placeholder="Search..."
        />
      </div>

      {/* nav menu */}
      <div className="flex flex-row text-slate-900 space-x-4">
        <Link href={"/product/mycart"}>
          <div className="flex relative cursor-pointer hover:text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <h1 className="text-base font-semibold mx-1 hidden lg:inline">
              My Cart
            </h1>
            <h1 className="text-xs rounded-full px-1 text-white -right-2 md:ml-4 font-semibold  absolute bg-purple-500">
              {cart.mycart.length}
            </h1>
          </div>
        </Link>

        <Link href={"/mywishlist"}>
          <div className="flex items-center">
            <AiOutlineHeart size={25} />
            <h1>My wishlist</h1>
          </div>
        </Link>

        <Link href="/login">
          <div className="flex items-center">
            <AiOutlineLogin size={25} />
            <h1>Login </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
