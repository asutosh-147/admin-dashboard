import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import avatar3 from "../data/avatar3.png";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const UserProfile = () => {
  const { handleClose, currentColor } = useStateContext();
  return (
    <div className="fixed top-16 right-10 bg-white p-2 w-80 rounded-lg shadow-2xl dark:bg-secondary-dark-bg">
      <div className="flex items-center justify-between px-4 py-1 border-b-1">
        <div className="font-medium dark:text-gray-50">User Profile</div>
        <div className="rounded-full p-2 hover:shadow-md text-lg text-gray-500 hover:text-black dark:hover:text-white">
          <MdOutlineCancel onClick={() => handleClose("userProfile")} />
        </div>
      </div>
      <div className="flex mt-4 items-center gap-4 px-4 pb-4">
        <div>
          <img src={avatar3} alt="" className="rounded-full w-20" />
        </div>
        <div className="">
          <p className="font-bold dark:text-gray-300">Michael Roberts</p>
          <p className="dark:text-gray-300">Administrator</p>
          <p className="font-semibold dark:text-gray-300">info@shop.com</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color dark:border-gray-500 p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
