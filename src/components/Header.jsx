import { IoIosSearch } from "react-icons/io";
import { Calendar, ArrowDown2 } from "iconsax-react";
import bell from "/assets/header_bell.svg";
import user_img1 from "/assets/profile_images/img1.jpg";
import { FcMenu } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleSidebar }) => {
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

  return (
    <div className="bg-[#FAFAFA] border-b border-grey-200 py-[18px] px-2  flex justify-between items-center lg:ml-[80px] dark:text-white dark:bg-black/80">
      <h3 className="font-bold">Dashboard</h3>
      <div className="wrapper flex space-x-4">
        <div className="search overflow-hidden rounded-full border-[.6px] border-[#DADDDD] px-2 bg-white space-x-2 md:flex  items-center hidden lg:w-[349px] dark:bg-black/80 dark:border-black/80">
          <IoIosSearch className="text-xl text-[#A3A3A3]" />
          <input
            type="searh"
            placeholder="Search..."
            className=" placeholder:text-xs outline-none py-1 w-full lg:placeholder:text-sm dark:bg-black/80"
          />
        </div>

        {CalenderComponent}

        <div className="flex items-center ">
          <FcMenu
            className="md:hidden text-4xl -mr-5"
            onClick={toggleSidebar}
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
  );
};

export default Header;
