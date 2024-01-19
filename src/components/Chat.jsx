import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Chat = () => {
  const { handleClose, currentColor } = useStateContext();
  return (
    <div className=" nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-80">
      <div className="flex items-center justify-between py-1 border-b-1">
        <div className="font-medium dark:text-gray-50">Messages</div>
        <div className="rounded-full p-2 hover:shadow-md text-lg text-gray-500 hover:text-black dark:hover:text-white">
          <MdOutlineCancel onClick={() => handleClose("chat")} />
        </div>
      </div>
      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color dark:border-gray-500 p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
          >
            <img
              src={item.image}
              className="rounded-full w-10 h-10"
              alt={item.message}
            />
            <div>
              <p className="font-bold dark:text-gray-200">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all messages"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
}

export default Chat