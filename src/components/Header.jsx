import { Calendar, ArrowDown2 } from "iconsax-react";
import bell from "/assets/header_bell.svg";
import user_img1 from "/assets/profile_images/img1.jpg";
import search_icon from "/assets/search.svg";
import { useState } from "react";
import Search from "./Search";
import { useLayoutContext } from "./utils/LayoutContext";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const [search, setSearch] = useState(false);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleProfileClick = () => {
    alert("nothing here so far ... ");
  };
  const handleNotification = () => {
    alert("You've Got no notification yet !!! ");
  };

  const handleShowSearch = () => {
    setSearch(!search);
  };

  /** Calender sub_component*/
  const CalenderComponent = (
    <div className="calender md:flex items-center hidden space-x-4">
      <Calendar />
      <span className="text-sm md:font-bold">{formatDate(new Date())}</span>

      <div>
        <span className="h-2 w-2 mt-1 ml-4 bg-red-600 rounded-full absolute"></span>
        <img
          src={bell}
          alt="notification"
          className="h-8 w-8 hidden md:block"
          onClick={handleNotification}
        />
      </div>
    </div>
  );

  const { isSidebarOpen } = useLayoutContext();

  return (
    <>
      {search && <Search />}

      <div
        className={` ${
          isSidebarOpen ? "lg:ml-[80px] bg-red-300" : "lg:ml-0 bg-green-300"
        }bg-[#FAFAFA] border-b border-grey-200 py-[18px] px-2   flex justify-between items-center`}
      >
        <h3 className="font-bold">Dashboard</h3>
        <div className="wrapper flex space-x-4">
          <div className="search overflow-hidden rounded-full border-[.6px] border-[#DADDDD] px-2 bg-white space-x-2 md:flex  items-center hidden lg:w-[349px] dark:bg-black/80 dark:border-black/80 cursor-pointer">
            <img
              src={search_icon}
              alt="toggle_for_brightness"
              className=" bg-cover  w-[10.875px] h-[10.875px] lg:w-[16.875px] lg:h-[16.875px]"
            />
            <input
              type="searh"
              placeholder="Search..."
              className=" placeholder:text-xs outline-none py-1 w-full lg:placeholder:text-sm dark:bg-black/80"
            />
          </div>

          {CalenderComponent}

          <div className="flex items-center ">
            <img
              src={search_icon}
              alt="toggle_for_brightness"
              className="bg-cover  w-[20px] h-[20p] md:hidden cursor-pointer hover:text-black"
              onClick={handleShowSearch}
            />
          </div>

          <div
            className="profile flex items-center border-[.6px] border-[#DADDDD] w-fit rounded-full space-x-2 p-1"
            onClick={handleProfileClick}
          >
            <div className="h-8 w-8 relative rounded-full flex justify-center items-center ">
              <img
                src={user_img1}
                alt="user_profile_image"
                aria-label={`${user_img1}'s profile pic`}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="text-xs hidden md:block">
              <h3 className="font-bold">Justin Bergson</h3>
              <h5>Justin@gmail.com</h5>
            </div>

            <ArrowDown2 className="md:block hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// <FcMenu
//   className="md:hidden text-4xl -mr-3"
//   onClick={toggleSidebar}
// />
