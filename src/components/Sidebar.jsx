import logo from "/assets/Container/main_logo.svg";
import { Link, useLocation } from "react-router-dom";
import brightness from "/assets/brightness_1.svg";
import moon from "/assets/moon_1.svg";

import {
  Category,
  ArrowCircleRight2,
  Setting2,
  DiscountShape,
  Logout,
  InfoCircle,
  Box,
  Profile2User,
  TrendUp,
  ArrowLeft2,
  ArrowRight2,
} from "iconsax-react";
import { useLayoutContext } from "./utils/LayoutContext";

const TopIconsArray = [
  { Icon: Category, link: "/", variant: "Bulk" },
  { Icon: TrendUp, link: "/trend" },
  { Icon: Profile2User, link: "/profile" },
  { Icon: Box, link: "/notification" },
  { Icon: DiscountShape, link: "/pSettings" },
  { Icon: InfoCircle, link: "/info" },
];

const BtmIconsArray = [
  { Icon: ArrowCircleRight2, link: "/arrow" },
  { Icon: Setting2, link: "/settings" },
  { Icon: Logout, link: "/logout" },
];

// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutContext();
  const location = useLocation();

  return (
    <>
      <div
        className={`h-full bg-[#F7F8FA] border-r border-grey-200 z-30 fixed lg:ml-0 w-[60px] lg:w-[80px] shadow-md pb-5 ${
          !isSidebarOpen ? "ml-0" : "-ml-[60px] lg:-ml-[80px]"
        } block md:block dark:bg-black/80 dark:text-white transition-margin pt-4`}
      >
        <div className="flex justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 w-8 " />
          </Link>
        </div>
        <nav className="bg-[#F7F8FA] dark:bg-black/80 relative pt-3 border-r-1 border-grey-200 w-full h-full flex flex-col items-center justify-between">
          <ul className="w-full flex pt-3 flex-col items-center justify-center relative">
            {TopIconsArray.map(({ Icon, link, variant }) => (
              <li
                key={link}
                className={`flex items-center before:content-[''] before:absolute before:right-0
              before:h-[21px] before:w-[3px] dark:before:bg-white before:bg-black/80 before:rounded-tl-md before:rounded-bl-md before:transition-all before:duration-300 mb-[8px] text-[#B7B0B0] dark:text-white ${
                location.pathname === link
                  ? "before:opacity-100"
                  : "before:opacity-0"
              } hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100`}
              >
                <Link
                  to={link}
                  className="flex items-center justify-center h-10 w-full relative"
                >
                  <Icon
                    size={26}
                    aria-hidden
                    variant={variant ? "Bulk" : "Broken"}
                  />
                </Link>
              </li>
            ))}

            <div className="darkMode_toggle bg-white  p-[4px]  lg:p-[8px] rounded-full flex flex-col items-center space-y-8">
              <div className=" rounded-full bg-[#34CAA5] h-[30px] w-[30px] flex justify-center items-center ">
                <img
                  src={brightness}
                  alt="toggle_for_brightness"
                  className=" bg-cover  w-[10.875px] h-[10.875px] lg:w-[16.875px] lg:h-[16.875px] cursor-pointer hover:blur"
                ></img>
              </div>

              <img
                src={moon}
                alt="toggle_for_brightness"
                className=" bg-cover w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:blur"
              ></img>
            </div>
          </ul>

          <ul className="pb-12">
            {BtmIconsArray.map(({ Icon, link, variant }) => (
              <li
                key={link}
                className={`flex  items-center before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] before:bg-black before:rounded-tl-md before:rounded-bl-md before:transition-all before:duration-300 mb-[16px] text-[#B7B0B0] dark:text-white ${
                  location.pathname === link
                    ? "before:opacity-100"
                    : "before:opacity-0"
                } hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100`}
              >
                <a href={link}>
                  <Icon
                    size={23}
                    aria-hidden
                    variant={variant ? "Bulk" : "Broken"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="lg:hidden absolute top-12 -right-6 -z-60 py-3 bg-[#6160DC] text-white rounded-r-full cursor-pointer"
          onClick={() => {
            toggleSidebar(); // Corrected line
          }}
        >
          {isSidebarOpen ? <ArrowLeft2 className="" /> : <ArrowRight2 />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
