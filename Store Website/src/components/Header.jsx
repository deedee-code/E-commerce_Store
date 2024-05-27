"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const Header = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-store-server-0p31.onrender.com/api/restaurant"
      );
      setRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-store-server-0p31.onrender.com/api/restaurant/search?query=${searchQuery}`
      );
      setRestaurants(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="border-b-2 border-gray-100 sm:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-8">
          <div className="header_icon-wrapper">
            <IoMdMenu className="w-6 h-6" />
          </div>
          <div className="hidden sm:block">
            <a href="/">
              <Image
                src="https://www.heyfood.africa/icons/new/logo-circle-green.svg"
                alt="logo"
                width={40}
                height={20}
                priority={true}
              />
            </a>
          </div>
          <button className="hover:bg-gray-100 p-2 rounded-sm ml-2">
            <span
              className="text-black font-bold flex items-center"
              title="Set Location"
            >
              <IoLocationSharp className="w-6 h-6" />
              Set Location
            </span>
          </button>
        </div>
        <div className="">
          <div className="w-full flex items-center bg-gray-100 rounded-full px-5 relative">
            <IoSearchSharp className="w-6 h-6" />
            <input
              placeholder="Search restaurants or food"
              type="text"
              className="bg-gray-100 border-none focus:outline-none py-2 px-6 rounded-full w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </div>
        <div>
          <button className="bg-black text-white hover:bg-green-800 py-2 px-4 rounded-full">
            <span className="font-bold flex items-center gap-2">
              <MdShoppingCart className="w-6 h-6" />
              <p className="hidden sm:block">Cart</p>
              <LuDot className="w-6 h-6 hidden sm:block" />
              <p className="hidden sm:block">0</p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
