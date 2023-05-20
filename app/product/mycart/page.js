"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/mycartContext";
import ItemCart from "../../components/ItemCart";

function MyCart() {
  const { mycart } = useContext(CartContext);

  const [pincodeMsg, setPincodeMsg] = useState(false);

  const pinCode = ["71224", "71227", "71229", "712249"];

  const handleOnchange = (e) => {
    if (pinCode.includes(e.target.value)) {
      setPincodeMsg(true);
    } else {
      setPincodeMsg(false);
    }
  };

  return (
    <div className="flex items-start justify-center px-10 py-5 relative min-h-screen space-x-3">
      {mycart.length === 0 && (
        <h1 className="text-3xl text-center">Your List is empty</h1>
      )}
      {/* cart list */}
      <div className="flex-col flex flex-1">
        {mycart.map((item) => (
          <ItemCart {...item} key={item.itemId} />
        ))}
      </div>

      {/* Grand Total bar */}
      <div className="flex-col flex w-1/3 border sticky top-16 ">
        <h1 className="p-2 bg-gray-200">Grand Total</h1>

        <div className="flex-col flex p-3">
          <h1 className="flex flex-col h-full space-between">
            <span>Total cost</span>
            <span className="text-2xl font-bold">
              ₹{mycart.reduce((total, item) => total + item.itemPrice, 0)}/-
            </span>
          </h1>
          <hr className="my-2" />
          <input
            type="number"
            placeholder="Enter You Pincode"
            className="border my-2 p-2"
            onChange={handleOnchange}
          />
          {pincodeMsg ? (
            <h1 className="p-2 text-green-600">Serviceble</h1>
          ) : (
            <h1 className="p-2 text-red-600">Not-Serviceble</h1>
          )}
          <button className="bg-green-700 py-1 px-3 rounded-lg text-white ">
            Checkout now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
