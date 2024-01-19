import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../context/ContextProvider";
import { cartData } from "../data/dummy";
const Cart = () => {
  const { handleClose,currentColor } = useStateContext();
  return (
    <div className="nav-item bg-half-transparent w-full fixed top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center border-b-1 pb-4">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button className="rounded-full p-2 hover:shadow-md text-lg text-gray-500 hover:text-black dark:hover:text-white">
            <MdOutlineCancel onClick={() => handleClose("chat")} />
          </button>
        </div>
        <div className="mt-5">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center pb-6 mt-4 gap-5 border-b-1"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 rounded-md"
              />
              <div>
                <p className=" font-semibold">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-3 border-r-1 dark:border-gray-600 border-color text-red-600 hover:text-red-300"><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-3 border-r-1 border-color dark:border-gray-600 text-green-600 hover:text-green-300"><AiOutlinePlus /></p>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
