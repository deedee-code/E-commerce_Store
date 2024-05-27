import React from "react";
import { FaSortAmountDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="container w-[200px] hidden sm:block">
      <div className="flex flex-col">
        <div className="">
          <h4 className="font-bold text-lg">All Stores</h4>
          <p className="font-gray-400">(408 Stores)</p>
          <h5 className="flex items-center font-bold gap-2">
            <span className="">
              <FaSortAmountDown />
            </span>
            Sort
          </h5>
          <div className="flex flex-col gap-2 mt-2">
            <div className="">
              <span className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="store"
                  value="Most Popular"
                  id="Most_Popular"
                  className=""
                />
                <label for="Most_Popular" className="">
                  Most Popular
                </label>
              </span>
            </div>
            <div className="">
              <span className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="store"
                  value="Nearest"
                  id="nearest"
                  className=""
                />
                <label for="nearest" className="">
                  Nearest
                </label>
              </span>
            </div>
            <div className="">
              <span className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="store"
                  value="Highest Rated"
                  id="Highest_Rated"
                  className=""
                />
                <label for="Highest_Rated" className="">
                  Highest Rated
                </label>
              </span>
            </div>
            <div className="">
              <span className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="store"
                  value="Newest"
                  id="newest"
                  className=""
                />
                <label for="newest" className="">
                  Newest
                </label>
              </span>
            </div>
            <div className="">
              <span className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="store"
                  value="Most Rated"
                  id="Most_Rated"
                  className=""
                />
                <label for="Most_Rated" className="">
                  Most Rated
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
