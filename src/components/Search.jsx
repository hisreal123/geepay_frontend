import { useState } from "react";
import search_icon from "/assets/search.svg";
import { ArrowLeft } from "iconsax-react";

const Search = () => {
  const [search, setSearch] = useState(true);

  return (
    <>
      <div
        className={`z-30 absolute top-0 left-0 ${
          search ? "h-screen w-full" : "hidden"
        } bg-white px-3`}
      >
        <div className="py-2">
          <ArrowLeft
            onClick={() => {
              setSearch(!search);
            }}
          />
        </div>

        <div className="border-b border-gray-1 pb-4">
          <h1 className="font-bold text-xl py-5"> Search </h1>
          <div className="flex space-x-3 items-center">
            <input
              type="searh"
              placeholder="Enter search option .."
              className=" placeholder:text-sm outline-none py-3 px-3 w-full border border-gray-200 rounded-md"
            />
            <img
              src={search_icon}
              alt="toggle_for_brightness"
              className="bg-cover w-[30px] h-[30px]"
            />
          </div>
        </div>

        <div className="btm pt-3">
          <h3> Nothing here .. </h3>
        </div>
      </div>
    </>
  );
};

export default Search;
