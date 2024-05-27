import React from "react";
import { IoMdRestaurant } from "react-icons/io";
import { GiFrenchFries } from "react-icons/gi";

const HeaderTab = () => {
  return (
    <div className="border-b-2 border-gray-100 sm:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-1">
        <div className="flex items-center justify-center sm:justify-start sm:space-x-4">
          <button className="bg-black text-white px-8 py-5 font-bold rounded-full">
            <span className="flex items-center gap-2 ">
              <IoMdRestaurant className="w-6 h-6" />
              Restaurant
            </span>
          </button>
          <button className="rounded-full hover:bg-gray-100 px-8 py-5 font-bold">
            <span className="flex items-center gap-2">
              <GiFrenchFries className="w-6 h-6" />
              Grocery
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTab;
